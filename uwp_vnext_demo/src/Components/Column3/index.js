import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

export default class Column3 extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View style={{ backgroundColor: 'grey', height: 30 }}>
          <Text style={{ fontSize: 18, color: 'white' }}>ScrollView</Text>
        </View>
        <View style={{ height: 150, marginTop: 20, marginBottom: 20 }}>
          <ScrollView>
            <Text style={{ fontSize: 40 }}>Scroll me plz</Text>
            <Text style={{ fontSize: 50 }}>Scroll me plz</Text>
            <Text style={{ fontSize: 60 }}>Scroll me plz</Text>
            <Text style={{ fontSize: 70 }}>Scroll me plz</Text>
            <Text style={{ fontSize: 80 }}>Scroll me plz</Text>
            <Text style={{ fontSize: 90 }}>Scroll me plz</Text>
            <Text style={{ fontSize: 99 }}>Scroll me plz</Text>
            <Text style={{ fontSize: 20 }}>****React Native UWP****</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
