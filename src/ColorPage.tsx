import * as React from 'react';
import { Button } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';
import { useNavigation } from '@react-navigation/native';

export const ColorPage = () => {
	const navigation = useNavigation();
	return (
		<>
			<TriangleColorPicker oldColor='#fbb' onColorSelected={color => alert(`Color selected: ${color}`)} style={{ flex: 1 }} />
			<Button title='Go to Phone' onPress={() => navigation.navigate('Phone')} />
		</>
	);
};
