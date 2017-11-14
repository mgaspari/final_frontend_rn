import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Navigator,
  AsyncStorage,
  Dimensions
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button, Text } from 'react-native-elements';
import MapView from 'react-native-maps';
import TokenManager from "../services/TokenManager"
import DealMarker from "./DealMarker"
LATITUDE_DELTA = 0.0922
LONGITUDE_DELTA = 0.0421
// LATITUDE_DELTA + (width / height)


class MapWithDeals extends React.Component{
  static navigationOptions = {
    title: "MapWithDeals",
    header: null
  }

  state = {
    initialPosition: {latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    },
    markerPositiion: {
      latitude: 37.78825,
      longitude: -122.4324
    },
    deals: []
  }

  getDeals = (token) => {
    // 10.0.3.2
    fetch("http://127.0.0.1:3000/api/v1/todays_deals", {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        "Authorization": token
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        deals: json
      }, console.log(this.state.deals))
    })
  }

  watchID: ?number = null

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({
        initialPosition: initialRegion
      })
      this.setState({
        markerPositiion: initialRegion
      })


    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      // TokenManager.getJWT()
      console.log("tester")
      console.log(this.state.deals)
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }

      this.setState({
        initialPosition: initialRegion
      })
      this.setState({
        markerPositiion: initialRegion
      })
    })
    TokenManager.getJWT().then(res =>  this.getDeals(res))

  }


  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID)
  }

  // dealMarkers = () => {
  //   this.state.deals.map((deal)=> {
  //     return <MapView.Marker
  //       coordinate={{latitude: deal.lat, longitude: deal.lng}}
  //       image="../../MarketerFinal.png"
  //       >
  //     </MapView.Marker>
  //   })
  // }

  // <MapView.Circle
  //   center={{latitude: deal.lat, longitude: deal.lng}}
  //   radius={750}
  //   fillColor="rgba(28, 181, 172, 0.2)"
  //   strokeColor="rgba(28, 181, 172, 0.3)"
  //   key={i}
  //   >
  // </MapView.Circle>

  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={styles.container}>
      <MapView
        style={styles.map}
        region={this.state.initialPosition}
      >
        <MapView.Marker
          coordinate={this.state.markerPositiion}>
          <View style={styles.radius}>
              <View style={styles.marker}/>
          </View>
        </MapView.Marker>
        {this.state.deals.length > 0 ?
          this.state.deals.map((deal, i)=> {
          return <DealMarker deal={deal} key={i} />
        })
          : null}
      </MapView>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     justifyContent: 'flex-end',
     alignItems: 'center',
   },
  map: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor:  'rgba(0, 122, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
  },
})

export default MapWithDeals
