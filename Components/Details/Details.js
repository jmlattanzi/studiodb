import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Image, Text, ScrollView } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator,
	StackActions,
	NavigationActions,
} from 'react-navigation'

class DetailsScreen extends React.Component {
	render() {
		return (
			<ScrollView style={styles.Scroll}>
				{[
					{
						id: 1,
						name: 'Hotdog',
						description: 'sample description',
						imageURL: 'https://itaic.s3.amazonaws.com/1551583180449.png',
					},
					{
						id: 2,
						name: 'Hotdog',
						description: 'sample description',
						imageURL: 'https://itaic.s3.amazonaws.com/1551583180449.png',
					},
					{
						id: 3,
						name: 'Hotdog',
						description: 'sample description',
						imageURL: 'https://itaic.s3.amazonaws.com/1551583180449.png',
					},
					{
						id: 4,
						name: 'Hotdog',
						description: 'sample description',
						imageURL: 'https://itaic.s3.amazonaws.com/1551583180449.png',
					},
					{
						id: 5,
						name: 'Hotdog',
						description: 'sample description',
						imageURL: 'https://itaic.s3.amazonaws.com/1551583180449.png',
					},
					{
						id: 6,
						name: 'Hotdog',
						description: 'sample description',
						imageURL: 'https://itaic.s3.amazonaws.com/1551583180449.png',
					},
					{
						id: 7,
						name: 'Hotdog',
						description: 'sample description',
						imageURL: 'https://itaic.s3.amazonaws.com/1551583180449.png',
					},
					{
						id: 8,
						name: 'Hotdog',
						description: 'sample description',
						imageURL: 'https://itaic.s3.amazonaws.com/1551583180449.png',
					},
					{
						id: 9,
						name: 'Hotdog',
						description: 'sample description',
						imageURL: 'https://itaic.s3.amazonaws.com/1551583180449.png',
					},
				].map((each) => {
					return (
						<Card title={each.name} key={each.id}>
							<Image
								source={{ uri: each.imageURL }}
								style={{
									width: 350,
									height: 350,
									borderRadius: 10,
									marginBottom: 10,
								}}
							/>
							<Text style={{ marginBottom: 10 }}>{each.description}</Text>
							<Button
								type='outline'
								backgroundColor='#03A9F4'
								buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
								title='View Details'
								onPress={() => {
									this.props.navigation.navigate('Item', {
										itemID: each.id,
										itemImageURL: each.imageURL,
										name: each.name,
										description: each.description,
									})
								}}
							/>
						</Card>
					)
				})}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	Scroll: {
		marginTop: 20,
	},
})

export default DetailsScreen
