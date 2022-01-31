import * as React from 'react';
import { DurationPage } from './src/DurationPage';
import { ColorPage } from './src/ColorPage';
import { HomePage } from './src/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={HomePage} />
				<Stack.Screen name='Color' component={ColorPage} />
				<Stack.Screen name='Duration' component={DurationPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);

	// return <PhoneInput />;
	// return <ColorPage />;
}
