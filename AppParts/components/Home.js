import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Navigator,
  ImageBackground,
  Image
} from 'react-native';
import { Button, Text } from 'react-native-elements';

class Home extends React.Component{
  static navigationOptions = {
    title: "Home",
    header: null
  }

  loginPress = (event) => {
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
        <Image source={require('../../Logomakr_2CXsbD.png')} style={styles.header} />
      </View>
        <Button style={{bottom: 10}} textStyle={{fontWeight: 'bold', fontFamily: "Bodoni 72", fontSize: 18}} onPress={this.loginPress} title="Login"
        backgroundColor='teal'/>
        <Button textStyle={{fontWeight: 'bold', fontFamily: "Bodoni 72", fontSize: 18}} onPress={this.signUpPress}
          title="Sign Up"
          backgroundColor='red'/>
      </View>
    </ImageBackground>
    )
  }
}

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
    width: 250,
    height: 150,
    top: "-10%",
  },
  box: {
    backgroundColor:'rgba(255, 255, 255, 0.2)',
  }
})
