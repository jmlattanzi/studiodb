import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Image, View, Text, ScrollView } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator,
	StackActions,
	NavigationActions,
} from 'react-navigation'

class ItemScreen extends React.Component {
	render() {
		const { navigation } = this.props
		const itemID = navigation.getParam('itemID', 'NO-ID')
		const imageURL = navigation.getParam(
			'itemImageURL',
			'https://itaic.s3.amazonaws.com/1551583180449.png'
		)
		const itemName = navigation.getParam('name', 'Name not found')
		const itemDescription = navigation.getParam('description', 'No description found')
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Image
					source={{ uri: imageURL }}
					style={{
						width: 350,
						height: 350,
						borderRadius: 10,
						marginBottom: 10,
					}}
				/>
				<Text>#{itemID}</Text>
				<Text>{itemName}</Text>
				<Text>{itemDescription}</Text>
				<Button
					type='outline'
					title='Go Home'
					onPress={() => {
						this.props.navigation.dispatch(
							StackActions.reset({
								index: 0,
								actions: [NavigationActions.navigate({ routeName: 'Details' })],
							})
						)
					}}
				/>
			</View>
		)
	}
}

// schema will most likely be like this
const item = {
    id: 1,
    name: '1967 Chevy Chevelle SS',
    manufacturer: 'Mattel',
    year: '2003',
    price: '0.99',
    value: '2.50',
    tags: [
        'hotwheels',
        'chevy',
        'treasure hunt'
    ]
}

export default ItemScreen
