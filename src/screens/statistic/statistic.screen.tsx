import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import PieChart from 'react-native-pie-chart';

import { Layout, Header, Loader } from '../../components';
import { ExpenseService } from '../../services';
import { useAuthStore } from '../../store';
import { Expense } from '../../types';
import { Messages } from '../../constants';
import { styles } from './statistic.styles';
import { TIME_PERIOD, type TimePeriod } from '../../enums';

const categories = [
	{ label: 'Food', value: 'Food', color: '#ff6384' },
	{ label: 'Transport', value: 'Transport', color: '#36a2eb' },
	{ label: 'Shopping', value: 'Shopping', color: '#ffce56' },
	{ label: 'Bills', value: 'Bills', color: '#4caf50' },
	{ label: 'Entertainment', value: 'Entertainment', color: '#ff5722' },
	{ label: 'Healthcare', value: 'Healthcare', color: '#9c27b0' },
	{ label: 'Education', value: 'Education', color: '#2196f3' },
	{ label: 'Gifts', value: 'Gifts', color: '#ffc107' },
	{ label: 'Travel', value: 'Travel', color: '#8bc34a' },
	{ label: 'Debt', value: 'Debt', color: '#e91e63' },
	{ label: 'Investment', value: 'Investment', color: '#3f51b5' },
	{ label: 'Other', value: 'Other', color: '#607d8b' },
];

export const StatisticScreen: React.FC = () => {
	const [period, setPeriod] = useState<TimePeriod>(TIME_PERIOD.month);
	const [expenses, setExpenses] = useState<Expense[]>([]);
	const [series, setSeries] = useState<{ value: number; color: string }[]>([]);
	const userId = useAuthStore(store => store.user!.uid);

	const fetchExpenses = async () => {
		try {
		const expensesData = await ExpenseService.getByTimePeriod(userId, period);
		setExpenses(expensesData);
		} catch (error: unknown) {
		const errorMessage = error instanceof Error ? error.message : Messages.UNKNOWN_ERROR;
		Alert.alert('Error fetching expense:', errorMessage);
		}
	};

	useEffect(() => {
		fetchExpenses();
	}, [period]);

	useEffect(() => {
		const categoryTotals: Record<string, number> = {};

		expenses.forEach(expense => {
		const categoryExists = categories.some(category => category.value === expense.category);
		if (categoryExists) {
			if (!categoryTotals[expense.category]) {
			categoryTotals[expense.category] = 0;
			}
			categoryTotals[expense.category] += expense.amount;
		}
		});

		const newSeries = categories
		.map(category => {
			const total = categoryTotals[category.value] || 0;
			if (total > 0) {
			return {
				value: total,
				color: category.color,
			};
			}
			return null;
		})
		.filter(item => item !== null);

		setSeries(newSeries);
	}, [expenses]);

	if (!expenses.length || !series.length) {
		return <Loader />;
	}

	return (
		<Layout isScrollable={false}>
			<Header title="Statistic" showBackButton />

			<View style={styles.button_container}>
				<TouchableOpacity style={styles.button} onPress={() => setPeriod(TIME_PERIOD.day)}>
					<Text style={styles.button_text}>Day</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => setPeriod(TIME_PERIOD.month)}>
					<Text style={styles.button_text}>Month</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => setPeriod(TIME_PERIOD.year)}>
					<Text style={styles.button_text}>Year</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.chartContainer}>
				<PieChart widthAndHeight={250} series={series} />
			</View>

			<View style={styles.legendContainer}>
				{series.map((item, index) => {
					const category = categories.find(c => c.color === item.color);

					return (
						<View key={index} style={styles.legendItem}>
							<View style={[styles.legendColor, { backgroundColor: item.color }]} />
							<Text style={styles.legendText}>{category?.label}</Text>
						</View>
					);
				})}
			</View>
		</Layout>
	);
};
