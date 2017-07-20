import React from 'react';
import { Text, View } from 'react-native';


export default class HomeScreen extends React.Component {

	render() {
		const {navigate} = this.props.navigation;
		return (
			<View>
				<Text>Hola Queridoooo!</Text>
				
			</View>
			)
	}
}