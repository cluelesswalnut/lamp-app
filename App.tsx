import * as React from 'react';
import { PhoneInput } from './src/PhoneInput';
import { ColorPage } from './src/ColorPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Color'>
				<Stack.Screen name='Color' component={ColorPage} />
				<Stack.Screen name='Phone' component={PhoneInput} />
			</Stack.Navigator>
		</NavigationContainer>
	);

	// return <PhoneInput />;
	// return <ColorPage />;
}
