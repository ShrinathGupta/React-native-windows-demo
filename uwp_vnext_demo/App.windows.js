/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Button
} from 'react-native';
import {Dashboard} from './src/Components';

class uwp_vnext_demo extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Dashboard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    height:'100%'
  },
 
});

AppRegistry.registerComponent('uwp_vnext_demo', () => uwp_vnext_demo);