import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Navigator,
  KeyboardAvoidingView,
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
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const { navigate } = this.props.navigation
    const value = this._form.getValue();
    TokenManager.setJWT(value)
    console.log('value: ', value);
    navigate("MapWithDeals")
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
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text h1 style={styles.head}>Login</Text>
        <View style={styles.form}>
        <Form type={User}
        ref={c => this._form = c}
       options={options}/>
        <Button
          title="Login"
          backgroundColor='teal'
          onPress={this.handleSubmit}
          style={styles.button}
          textStyle={{fontWeight: 'bold'}}
        />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffffff',
  },
  form: {
    width: "70%",
    justifyContent: 'center',

  },
  button: {
    marginTop: 20,
  },
  head: {
    justifyContent: 'center',
    marginBottom: 20,

  },

})
