import React from 'react';
import { Text } from 'react-native';
import { Button, Card } from "react-native-elements";

export default class SingleItem extends React.Component {
	render(){
		return(
			<Card
			  title= {this.props.item.name.first}
			  image={{ uri: this.props.item.picture.medium }}>
			  <Text style={{marginBottom: 10}}>
			    {this.props.item.login.username}
			  </Text>
			  <Button
			    icon={{name: 'code'}}
			    backgroundColor='#03A9F4'
			    //fontFamily='Lato'
			    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
			    title='VIEW NOW' />
			</Card>
			)
	}
}



