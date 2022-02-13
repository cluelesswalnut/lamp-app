import * as React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
});

export const ColorPage = () => {
	const navigation = useNavigation();
	return (
		<>
		<View style={styles.container}>
	  	<Text> Markus's Lamp </Text>
		</View>

			<TriangleColorPicker defaultColor='#000080' oldColor='#D40DB3' onColorSelected={color => alert(`Color selected: ${color}`)} style={{ flex: 5 }} />

		<View style={styles.container}>
	  	<Text> Amanda's Lamp </Text>
		</View>

				<TriangleColorPicker defaultColor='#000080' oldColor='#D40DB3' onColorSelected={color => alert(`Color selected: ${color}`)} style={{ flex: 5 }} />
		</>
	);
};
