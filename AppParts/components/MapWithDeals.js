import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Navigator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button, Text } from 'react-native-elements';

class MapWithDeals extends React.Component{
  static navigationOptions = {
    title: "MapWithDeals"
  }
  render(){
    const { navigate } = this.props.navigation
    return(
      <View>
      <Text>Map</Text>
      <Button onClick={ () => navigate('Login')}>Go back</Button>
      </View>
    )
  }
}

export default MapWithDeals
