import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './expense-item.styles';
import { Expense } from '../../../types/expense.types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NAVIGATION_KEYS, RootStackParamList } from '../../../navigation';



const formatDate = (date: Date) => ({
    day: date.toLocaleString('en-US', { day: '2-digit' }),
    weekday: date.toLocaleString('en-US', { weekday: 'long' }),
    monthYear: date.toLocaleString('en-US', { month: 'short', year: 'numeric' }),
    time: date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
});


export const ExpenseItem: React.FC<{ expense: Expense }> = ({ expense }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { day, weekday, monthYear, time } = formatDate(expense.date);
    const handlePress = () => {
        navigation.navigate(NAVIGATION_KEYS.EDIT_EXPENSE, { id: expense.id});
    };

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={handlePress}
      >
        <View style={styles.container}>
          <View style={styles.dateContainer}>
            <Text style={styles.day}>{day}</Text>
            <View style={styles.dateDetails}>
              <Text style={styles.weekday}>{weekday}</Text>
              <Text style={styles.monthYear}>{monthYear}</Text>
            </View>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>${expense.amount}</Text>
          </View>
        </View>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{expense.title}</Text>
        <View style={styles.container}>
          <Text style={styles.category}>{expense.category}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </TouchableOpacity>
    );
};
