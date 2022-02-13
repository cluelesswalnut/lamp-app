import * as React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const HomePage = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text> Total Signals: </Text>
			<Text> Markus's Last Signal: </Text>
			<Text> Amanda's Last Signal:  </Text>
			<Button title='Go to Color picker' onPress={() => navigation.navigate('Color')} />
			<Button title='Go to Duration picker' onPress={() => navigation.navigate('Duration')} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});