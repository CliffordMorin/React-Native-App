/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

const App = () => {
	const [ timesPressed, setTimesPressed ] = useState(0);

	let textLog = '';
	if (timesPressed > 1) {
		textLog = timesPressed + 'x onPress';
	} else if (timesPressed > 0) {
		textLog = 'onPress';
	}

	var randomColor = Math.floor(Math.random() * 16777215).toString(16);

	return (
		<View style={styles.container}>
			<ImageBackground
				style={({ pressed }) => [
					{
						backgroundColor: pressed ? '#' + randomColor : 'white'
					}
				]}
			>
				<Pressable
					onPress={() => {
						setTimesPressed((current) => current + 1);
					}}
					style={({ pressed }) => [
						{
							backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'
						},
						styles.wrapperCustom
					]}
				>
					{({ pressed }) => <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
				</Pressable>
				<View style={styles.logBox}>
					<Text testID="pressable_press_console">{textLog}</Text>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	text: {
		fontSize: 16
	},
	wrapperCustom: {
		borderRadius: 8,
		padding: 6
	},
	logBox: {
		padding: 20,
		margin: 10,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#f09890',
		backgroundColor: '#f98973'
	}
});

export default App;
