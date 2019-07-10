import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';

export default class Banana extends Component {    

    render() {
    const dimensions = Dimensions.get('window')
    const imageHeight = Math.round(dimensions.width * 9 /16)
    const imageWidht = dimensions.width

      let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
        <Image resizeMode='contain' source={pic} style={{width: imageWidht, height: imageHeight}}/>
      );
    }    
  }  
  // skip this line if using Create React Native App
  AppRegistry.registerComponent('AwesomeProject', () => Banana);