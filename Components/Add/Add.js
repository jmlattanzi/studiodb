import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

class AddScreen extends React.Component {
	render() {
		return (
			<View>
				<Text style={{ textAlign: 'center', textAlignVertical: 'auto', marginVertical: 100 }}>
					This is where you will be able to either scan a barcode or enter in information manually
				</Text>
			</View>
		)
	}
}

export default AddScreen
