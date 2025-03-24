import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../../enums';
import { useThemeStore } from '../../store';
import { styles } from './layout.styles';

type LayoutProps = {
	children: React.ReactNode;
	isScrollable?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({
	children,
	isScrollable = true,
}) => {
	const content = <View style={styles.content}>{children}</View>;
	const { theme } = useThemeStore();

	return (
		<SafeAreaView style={[styles.safe_area, {backgroundColor: COLORS[theme].background}]}>
			{isScrollable ? (
				<ScrollView
					contentContainerStyle={styles.scroll_container}
					showsVerticalScrollIndicator={false}
				>
					{content}
				</ScrollView>
			) : (
				content
			)}
		</SafeAreaView>
	);
};
