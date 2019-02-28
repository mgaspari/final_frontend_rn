import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image
} from 'react-native';
import { Button, Text, Tile } from 'react-native-elements';
import MapView from "react-native-maps";
import DealMarker from "./DealMarker"

export default class DealShow extends Component{
  render(){
    const deal = this.props.navigation.state.params.deal
    return(
      <Tile
        imageSrc={{uri: deal.img_link, top: 15}}
        title={deal.title}
        titleStyle={styles.dealHead}
        contentContainerStyle={{height: 70}}
      >
        <View style={styles.pageText}>
          <Text style={styles.dealInfo}>{deal.description}</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.dealInfo}>{deal.address}</Text>
        </View>
        <MapView
          style={styles.map}
          region={{latitude: deal.lat,
            longitude: deal.lng,
            latitudeDelta: 0.001,
            longitudeDelta: 0.002}}
        >
          <DealMarker navigation={this.props.navigation} deal={deal}/>
        </MapView>
      </Tile>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    left: 0,
    right: 0,
    top: 185,
    height: 175,
    position: 'absolute',
  },
  dealInfo: {
    fontFamily: "Bodoni 72",
    fontSize: 18,
  },
  dealHead: {
    fontFamily: "Bodoni 72",
    fontSize: 30,
  },
  pageText: {
    flex: 1,
  }
})
