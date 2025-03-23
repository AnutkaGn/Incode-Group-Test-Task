import { Text, TouchableOpacity } from 'react-native';

import { Layout, Header } from '../../components';
import { AuthService } from '../../services';
import { styles } from './settings.styles';

export const SettingsScreen: React.FC = () => {
    const handlePress = async() => {
        await AuthService.logout();
    };

    return (
        <Layout isScrollable={false}>
            <Header title="Settings" showBackButton />
            <TouchableOpacity onPress={handlePress}>
				<Text style={styles.logout_text}>Log out</Text>
			</TouchableOpacity>
        </Layout>
    );
};
