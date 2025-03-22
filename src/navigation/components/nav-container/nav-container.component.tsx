import { NavigationContainer } from '@react-navigation/native';

type NavContainerProps = {
	children: React.ReactNode;
};

export const NavContainer: React.FC<NavContainerProps> = ({
	children,
}) => {
	return <NavigationContainer>{children}</NavigationContainer>;
};
