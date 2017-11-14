import React from "react"
import { Platform,
StyleSheet,
View,
TouchableHighlight,
TextInput,
FlatList,
KeyboardAvoidingView
} from "react-native"
import t from 'tcomb-form-native'
import { Button, Text } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  first_name: t.String,
  last_name: t.String,
  phone_number: t.Number,
  password: t.String,
  password_confirmation: t.String

})


var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    },
    password_confirmation: {
      password: true,
      secureTextEntry: true
    },
    phone_number: {
      keyboardType: 'number-pad'
    }
  }
};

class SignUp extends React.Component {

  static navigationOptions = {
    title: "SignUp"
  }

  handleSubmit = () => {
    const { navigate } = this.props.navigation

    const value = this._form.getValue();
    console.log('value: ', value);
    navigate('MapWithDeals')
  }


  render(){

    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text h1 style={styles.head}>Sign Up</Text>
        <Form type={User}
        ref={c => this._form = c}
       options={options}/>
        <Button
          title="Sign Up!"
          backgroundColor='teal'
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffffff',
  },
  head: {
    justifyContent: 'center',
    marginBottom: 20,

  },

})

export default SignUp
