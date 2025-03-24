import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAVIGATION_KEYS, RootStackParamList } from '../types';
import { SCREEN_OPTIONS } from './screen-options.constant.ts';
import {
	AddExpenseScreen,
	EditExpenseScreen,
	ExpensesScreen,
	SettingsScreen,
	StatisticScreen,
} from '../../screens';


const PrivateStack = createNativeStackNavigator<RootStackParamList>();

export const PRIVATE_SCREENS = (
	<>
		<PrivateStack.Screen
			name={NAVIGATION_KEYS.EXPENSES}
			component={ExpensesScreen}
			options={SCREEN_OPTIONS}
		/>
		<PrivateStack.Screen
			name={NAVIGATION_KEYS.ADD_EXPENSE}
			component={AddExpenseScreen}
			options={SCREEN_OPTIONS}
		/>
		<PrivateStack.Screen
			name={NAVIGATION_KEYS.EDIT_EXPENSE}
			component={EditExpenseScreen}
			options={SCREEN_OPTIONS}
		/>
		<PrivateStack.Screen
			name={NAVIGATION_KEYS.SETTINGS}
			component={SettingsScreen}
			options={SCREEN_OPTIONS}
		/>
		<PrivateStack.Screen
			name={NAVIGATION_KEYS.STATISTIC}
			component={StatisticScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);
