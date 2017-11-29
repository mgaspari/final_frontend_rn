import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Navigator,
  KeyboardAvoidingView,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import { Button, Text } from 'react-native-elements';
import t from 'tcomb-form-native'
import TokenManager from "../services/TokenManager"

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
})



class Login extends React.Component{
  static navigationOptions = {
    title: "Login",
    header: null
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const { navigate } = this.props.navigation
    const value = this._form.getValue();
    TokenManager.setJWT(value)
    console.log('value: ', value);
    navigate("MapWithDeals")
  }

  handleSignUp = (event) => {
    this.props.navigation.navigate("SignUp")
  }


  render(){
    var options = {
      fields: {
        username: {
          autoCapitalize: "none",
        },
        password: {
          password: true,
          secureTextEntry: true
        }
      }
    };
    return(
      <ImageBackground source={require("../../doodles.png")} style={styles.backgroundImage}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.head}>Login</Text>
        <View style={styles.form}>
        <Form type={User}
        ref={c => this._form = c}
       options={options}/>
        <Button
          title="Login"
          backgroundColor='teal'
          onPress={this.handleSubmit}
          style={styles.button}
          textStyle={{fontWeight: 'bold', fontFamily: "Bodoni 72", fontSize: 18}}
        />
        <Button
          title="Sign Up"
          backgroundColor='red'
          onPress={this.handleSignUp.bind(this)}
          style={styles.signUp}
          textStyle={{fontWeight: 'bold', fontFamily: "Bodoni 72", fontSize: 18}}
        />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
    )
  }
}

export default Login

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'transparent',
  },
  form: {
    width: "70%",
    justifyContent: 'center',
    backgroundColor: "white",
  },
  button: {
    marginTop: 20,
  },
  signUp: {
    marginTop: 10,
  },
  head: {
    justifyContent: 'center',
    marginBottom: 20,
    fontFamily: "Bodoni 72",
    fontSize: 50,

  },

})
