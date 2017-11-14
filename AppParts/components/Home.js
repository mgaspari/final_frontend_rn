import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Navigator,
  ImageBackground
} from 'react-native';
import { Button, Text } from 'react-native-elements';

class Home extends React.Component{
  static navigationOptions = {
    title: "Home",
    header: null
  }

  loginPress = (event) => {
    console.log("login")
    const { navigate } = this.props.navigation
    navigate('Login')
  }

  signUpPress = (event) => {
    const { navigate } = this.props.navigation
    navigate('SignUp')
  }

  render(){
    return(
      <ImageBackground source={require("../../CityBackground.gif")} style={styles.backgroundImage}>
      <View style={styles.Box}/>
      <View style={styles.container}>
        <View style={styles.head}>
        <Text h1 style={styles.header}>Welcome</Text>
      </View>
        <Button textStyle={{fontWeight: 'bold'}} onPress={this.loginPress} title="Login"
        backgroundColor='teal'/>
        <Button textStyle={{fontWeight: 'bold'}} onPress={this.signUpPress}
          title="Sign Up"
          backgroundColor='red'/>
      </View>
    </ImageBackground>
    )
  }
}

{/* <Button onClick={this.loginPress} title="Login"
backgroundColor='teal'/> <Button onClick={this.signUpPress}
  title="Sign Up"
  backgroundColor='red'/> */}

export default Home

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'rgba(255, 255, 255, 0.05)',
  },
  head: {
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  box: {
    backgroundColor:'rgba(255, 255, 255, 0.2)',
  }

})
