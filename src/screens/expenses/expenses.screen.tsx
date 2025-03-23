import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Layout, Header, ExpenseList } from '../../components';
import { NAVIGATION_KEYS, RootStackParamList } from '../../navigation';

export const ExpensesScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handleSubmit = async () => {
        navigation.navigate(NAVIGATION_KEYS.ADD_EXPENSE);
    };

    return (
        <Layout isScrollable={false}>
            <Header title="My Expanses" showSettingsButton showStatisticButton/>
            <ExpenseList />
            <Button
                title="Add new expense"
                onPress={handleSubmit}
            />
        </Layout>
    );
};
