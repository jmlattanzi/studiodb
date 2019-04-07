import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import { StackActions, NavigationActions } from 'react-navigation' // Version can be specified in package.json

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={styles.text}>Home Screen</Text>
				<Text style={styles.text}>
					This screen will contain basic information about your collection such as total items,
					latest item, maybe a random fact.
				</Text>
				<Button
					type='outline'
					title='Open Catalog'
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

const styles = StyleSheet.create({
	text: {
		margin: 10,
		textAlign: 'center',
	},
})

export default HomeScreen
