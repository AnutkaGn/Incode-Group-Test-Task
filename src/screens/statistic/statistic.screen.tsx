import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import PieChart from 'react-native-pie-chart';

import { Layout, Header, Loader, FilterButton } from '../../components';
import { ExpenseService } from '../../services';
import { useAuthStore, useThemeStore } from '../../store';
import { Expense } from '../../types';
import { Categories, Messages } from '../../constants';
import { COLORS, TIME_PERIOD, type TimePeriod } from '../../enums';
import { styles } from './statistic.styles';

export const StatisticScreen: React.FC = () => {
	const [period, setPeriod] = useState<TimePeriod>(TIME_PERIOD.month);
	const [expenses, setExpenses] = useState<Expense[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [series, setSeries] = useState<{ value: number; color: string }[]>([]);
	const userId = useAuthStore(store => store.user!.uid);
	const { theme } = useThemeStore();

	const fetchExpenses = async () => {
		try {
			const expensesData = await ExpenseService.getByTimePeriod(userId, period);
			setExpenses(expensesData);
		} catch (error: unknown) {
			const errorMessage = error instanceof Error ? error.message : Messages.UNKNOWN_ERROR;
			Alert.alert('Error fetching expense:', errorMessage);
		}finally{
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchExpenses();
	}, [period]);

	useEffect(() => {
		const categoryTotals: Record<string, number> = {};

		expenses.forEach(expense => {
		const categoryExists = Categories.some(category => category.value === expense.category);
		if (categoryExists) {
			if (!categoryTotals[expense.category]) {
			categoryTotals[expense.category] = 0;
			}
			categoryTotals[expense.category] += expense.amount;
		}
		});

		const newSeries = Categories
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

	if(isLoading){
		return <Loader/>;
	}

	return (
		<Layout isScrollable={false}>
			<Header title="Statistic" showBackButton />

			<View style={styles.button_container}>
				<FilterButton label="Day" setPeriod={() => setPeriod(TIME_PERIOD.day)}/>
				<FilterButton label="Month" setPeriod={() => setPeriod(TIME_PERIOD.month)}/>
				<FilterButton label="Year" setPeriod={() => setPeriod(TIME_PERIOD.year)}/>
			</View>
			{(expenses.length && series.length) ? (
				<>
					<View style={styles.chart_container}>
						<PieChart widthAndHeight={250} series={series} />
					</View>
					<View style={styles.legend_container}>
						{series.map((item, index) => {
							const category = Categories.find(c => c.color === item.color);

							return (
								<View key={index} style={styles.legend_item}>
									<View style={[styles.legend_color, { backgroundColor: item.color }]} />
									<Text style={[styles.legend_text, {color: COLORS[theme].text_primary}]}>{category?.label}</Text>
								</View>
							);
						})}
					</View>
				</>
			) : (
				<Text style={[styles.text, {color: COLORS[theme].text_secondary}]}>Expense not found.</Text>
			)}
		</Layout>
	);
};
