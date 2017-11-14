import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';

export default class TokenManager {

  static setJWT = (loginParams) => {
    fetch(`http://127.0.0.1:3000/api/v1/sessions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(loginParams)
    }).then(res => res.json()).then(json =>{
      console.log(json.jwt)
      AsyncStorage.setItem('jwt', json.jwt)
     })
  }

  static getJWT = async () => {
    try {
      let token = await AsyncStorage.getItem('jwt')
      console.log(token)
      return token
    } catch(error){
      console.log("Not yet")
    }
  }
}
