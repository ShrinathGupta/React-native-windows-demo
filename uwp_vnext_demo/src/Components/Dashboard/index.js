import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Column1, Column2, Column3 } from '../../Components';

export default class Dashboard extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <View>
          <Text style={{ fontSize: 25, paddingLeft: 50, marginTop: 15 }}>
            React native UWP native elements in vnext version
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
          <View style={{ width: '33.3%', backgroundColor: 'powderblue', paddingRight: 5 }}>
            <Column1 />
          </View>
          <View style={{ width: '33.3%', backgroundColor: 'powderblue', paddingRight: 5 }}>
            <Column2 />
          </View>
          <View style={{ width: '33.3%', backgroundColor: 'powderblue', paddingRight: 5 }}>
            <Column3 />
          </View>
        </View>
      </View>
    );
  }
}
