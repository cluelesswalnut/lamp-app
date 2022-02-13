import * as React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function testGet() {
	return fetch('https://lamp-lamp.herokuapp.com/lamp?id=amanda')
		.then(response => response.json())
		.then(responseJson => {
			alert(JSON.stringify(responseJson));
		})
		.catch(error => {
			console.error(error);
		});
}
function testPost() {
	return fetch('https://lamp-lamp.herokuapp.com/lamp/setcolor', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			id: 'amanda',
			color: '#000080',
		}),
	});
}

export const HomePage = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text> Total Signals: </Text>
			<Text> Markus's Last Signal: </Text>
			<Text> Amanda's Last Signal: </Text>
			<Button title='Go to Color picker' onPress={() => navigation.navigate('Color')} />
			<Button title='Go to Duration picker' onPress={() => navigation.navigate('Duration')} />
			<Button title='Test get' onPress={testGet} />
			<Button title='Test post' onPress={testPost} />
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
