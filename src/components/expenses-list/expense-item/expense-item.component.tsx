import { View, Text, TouchableOpacity } from 'react-native';
import { Expense } from '../../../types/expense.types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation';
import { COLORS } from '../../../enums';
import { useThemeStore } from '../../../store';
import { styles } from './expense-item.styles';

const formatDate = (date: Date) => ({
	day: date.toLocaleString('en-US', { day: '2-digit' }),
	weekday: date.toLocaleString('en-US', { weekday: 'long' }),
	monthYear: date.toLocaleString('en-US', { month: 'short', year: 'numeric' }),
	time: date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
});

type ExpenseProps = {
	expense: Expense;
}

export const ExpenseItem: React.FC<ExpenseProps> = ({ expense }) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const { day, weekday, monthYear, time } = formatDate(expense.date);
	const handlePress = () => {
		navigation.navigate(NAVIGATION_KEYS.EDIT_EXPENSE, { id: expense.id});
	};
	const { theme } = useThemeStore();

	return (
		<TouchableOpacity
			style={[styles.item, {backgroundColor: COLORS[theme].backround_input}]}
			onPress={handlePress}
		>
			<View style={[styles.container]}>
				<View style={styles.date_container}>
					<Text style={[styles.day, {color: COLORS[theme].background_green}]}>{day}</Text>
					<View style={styles.date_details}>
						<Text style={[styles.weekday, {color: COLORS[theme].text_secondary}]}>{weekday}</Text>
						<Text style={[styles.month_year, {color: COLORS[theme].text_secondary}]}>{monthYear}</Text>
					</View>
				</View>
				<View style={styles.amount_container}>
					<Text style={[styles.amount, {color: COLORS[theme].text_primary}]}>${expense.amount}</Text>
				</View>
			</View>
			<Text style={[styles.title, {color: COLORS[theme].text_secondary}]} numberOfLines={1} ellipsizeMode="tail">{expense.title}</Text>
			<View style={styles.container}>
				<Text style={[styles.category, {color: COLORS[theme].background_inactive}]}>{expense.category}</Text>
				<Text style={[styles.time, {color: COLORS[theme].text_secondary}]}>{time}</Text>
			</View>
		</TouchableOpacity>
	);
};
