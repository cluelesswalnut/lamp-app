import * as React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const DurationPage = () => {
	const [Duration, setDuration] = React.useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.instructions}>Enter lanp on Duration</Text>
			<View style={styles.textInputParent}>
				<TextInput
					placeholder={'Enter minutes here'}
					style={styles.textInput}
					keyboardType='numeric'
					onChangeText={setDuration}
					value={Duration}
					autoFocus={true}
				/>
				<TouchableOpacity style={styles.clearButtonParent} onPress={() => setDuration('')}>
					<Image style={styles.clearButton} source={require('../assets/icon.png')} />
				</TouchableOpacity>
			</View>
			<TouchableOpacity onPress={() => setDuration('60')} style={styles.button}>
				<Text style={styles.buttonText}>Set Duration</Text>
			</TouchableOpacity>
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
	instructions: {
		color: '#888',
		fontSize: 18,
		marginHorizontal: 15,
	},
	button: {
		backgroundColor: 'blue',
		padding: 20,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 20,
		color: '#fff',
	},
	textInputParent: {
		width: 250,
		height: 44,
		padding: 10,
		marginTop: 20,
		marginBottom: 10,
		backgroundColor: '#e8e8e8',
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textInput: {
		width: '90%',
	},
	clearButton: {
		height: 16,
		width: 16,
	},
	clearButtonParent: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 5,
	},
});
