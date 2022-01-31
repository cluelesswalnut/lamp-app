import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const HomePage = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Button title='Go to color picker' onPress={() => navigation.navigate('Color')} />
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
