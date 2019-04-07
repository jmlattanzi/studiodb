import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator,
	StackActions,
	NavigationActions,
} from 'react-navigation'

import HomeScreen from './Components/Home/Home'
import AddScreen from './Components/Add/Add'
import DetailsScreen from './Components/Details/Details'
import ItemScreen from './Components/Item/Item';

const HomeIconWithBadge = (props) => {
	// You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
	return <IconWithBadge {...props} badgeCount={0} />
}

class IconWithBadge extends React.Component {
	render() {
		const { name, badgeCount, color, size } = this.props
		return (
			<View style={{ width: 24, height: 24, margin: 5 }}>
				<Ionicons name={name} size={size} color={color} />
				{badgeCount > 0 && (
					<View
						style={{
							// If you're using react-native < 0.57 overflow outside of the parent
							// will not work on Android, see https://git.io/fhLJ8
							position: 'absolute',
							right: -6,
							top: -3,
							backgroundColor: 'red',
							borderRadius: 6,
							width: 12,
							height: 12,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
					</View>
				)}
			</View>
		)
	}
}

const DetailsStack = createStackNavigator({
	Details: DetailsScreen,
	Item: ItemScreen,
})

const AppNavigator = createBottomTabNavigator(
	{
		Home: HomeScreen,
		Add: AddScreen,
		Details: DetailsStack,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state
				let IconComponent = Ionicons
				let iconName
				if (routeName === 'Home') {
					iconName = `ios-home`
					// Sometimes we want to add badges to some icons.
					// You can check the implementation below.
					IconComponent = HomeIconWithBadge
				} else if (routeName === 'Details') {
					iconName = `ios-list`
				} else if (routeName === 'Add') {
					iconName = `ios-add-circle-outline`
				}

				// You can return any component that you like here!
				return <IconComponent name={iconName} size={25} color={tintColor} />
			},
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
	}
)


export default createAppContainer(AppNavigator)
