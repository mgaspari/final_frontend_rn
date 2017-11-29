import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";
import { Button, Text, Badge } from "react-native-elements";
import MapView from "react-native-maps";

export default class DealMarker extends Component {
  markerPress = event => {
    console.log(event.nativeEvent);
    this.props.navigation.navigate("DealShow", {deal: this.props.deal});
  };
  render() {
    return (
      <MapView.Marker
        coordinate={{
          latitude: this.props.deal.lat,
          longitude: this.props.deal.lng
        }}
        image={require("../../DealCircle3.png")}

        identifier={this.props.deal.id.toString()}
      >
        <MapView.Callout style={styles.callOut}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: this.props.deal.img_link }}
            />
            <Text h3 style={styles.head}>{this.props.deal.title}</Text>
            <Badge value="More Info >" textStyle={{ color: "white", fontFamily: "Bodoni 72" }} containerStyle={{ backgroundColor: 'teal'}}
            onPress={this.markerPress.bind(this)}/>
          </View>
        </MapView.Callout>
      </MapView.Marker>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150
  },
  head: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Bodoni 72",
  },
  callOut: {
    zIndex: 1000,
  }
});
