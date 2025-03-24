import { Text, TouchableOpacity } from 'react-native';

import { Layout, Header } from '../../components';
import { AuthService } from '../../services';
import { styles } from './settings.styles';
import { useThemeStore } from '../../store';
import { COLORS } from '../../enums';
import { LogOutIcon } from '../../assets/icons/log-out';

export const SettingsScreen: React.FC = () => {
    const handlePress = async() => {
        await AuthService.logout();
    };
    const {theme} = useThemeStore();
    return (
        <Layout isScrollable={false}>
            <Header title="Settings" showBackButton showThemeToggle/>
            <TouchableOpacity onPress={handlePress} style={styles.logout}>
                <LogOutIcon color={COLORS[theme].danger}/>
				<Text style={[styles.logout_text, {color: COLORS[theme].danger}]}>Log out</Text>
			</TouchableOpacity>
        </Layout>
    );
};
