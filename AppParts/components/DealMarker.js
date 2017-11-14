import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { Button, Text } from 'react-native-elements';
import MapView from 'react-native-maps';

export default class DealMarker extends Component {
  markerPress = (event) => {
    console.log(event.nativeEvent)
  }
  render(){
    return(
      <MapView.Marker
        coordinate={{latitude: this.props.deal.lat, longitude: this.props.deal.lng}}
        image={require("../../DealCircle3.png")}
        onPress={this.markerPress}
        identifier={this.props.deal.id.toString()}
        >
          <MapView.Callout>
              <View>
                <Text>Hi!</Text>
              </View>
            </MapView.Callout>
      </MapView.Marker>
    )
  }
}
