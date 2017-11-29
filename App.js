/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import SignUp from "./AppParts/components/SignUp"
import MapWithDeals from "./AppParts/components/MapWithDeals"
import Login from "./AppParts/components/Login"
import Home from "./AppParts/components/Home"
import DealShow from "./AppParts/components/DealShow"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const NavApp = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  MapWithDeals: { screen: MapWithDeals },
  DealShow: { screen: DealShow}
})
export default class App extends Component<{}> {

  render() {
    return (
       <NavApp />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
