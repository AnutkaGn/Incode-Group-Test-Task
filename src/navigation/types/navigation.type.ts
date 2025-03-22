export enum NAVIGATION_KEYS {
	LOGIN = 'LOGIN',
	SIGNUP = 'SIGNUP',
	EXPENSES = 'EXPENSES',
	ADD_EXPENSE = 'ADD_EXPENSE',
	EDIT_EXPENSE = 'EDIT_EXPENSE',
	STATISTIC = 'STATISTIC',
	SETTINGS = 'SETTINGS',
}

export type RootStackParamList = {
	[NAVIGATION_KEYS.LOGIN]: undefined;
	[NAVIGATION_KEYS.SIGNUP]: undefined;
	[NAVIGATION_KEYS.EXPENSES]: undefined;
	[NAVIGATION_KEYS.ADD_EXPENSE]: undefined;
	[NAVIGATION_KEYS.EDIT_EXPENSE]: { id: string };
	[NAVIGATION_KEYS.STATISTIC]: undefined;
	[NAVIGATION_KEYS.SETTINGS]: undefined;
};
