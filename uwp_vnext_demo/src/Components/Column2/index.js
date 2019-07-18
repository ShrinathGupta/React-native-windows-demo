import React, { Component } from 'react';
import { View, Text, FlatList, Image, TextInput } from 'react-native';
import styles from './styles';

export default class Column2 extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      flatList: [
        { key: 'Devin' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' }
      ]
    };
  }

  render() {
    return (
      <View>
        <View style={{ backgroundColor: 'grey', height: 30 }}>
          <Text style={{ fontSize: 18, color: 'white' }}>Image</Text>
        </View>
        <Image
          style={{ width: 'auto', height: 200, marginTop: 20, marginBottom: 20 }}
          source={{ uri: 'https://www.gstatic.com/webp/gallery/4.jpg' }}
        />

        <View style={{ backgroundColor: 'grey', height: 30 }}>
          <Text style={{ fontSize: 18, color: 'white' }}>Input Box</Text>
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Type here !"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Text>{this.state.text}</Text>
        </View>

        <View style={{ backgroundColor: 'grey', height: 30 }}>
          <Text style={{ fontSize: 18, color: 'white' }}>FlatList</Text>
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <FlatList
            data={this.state.flatList}
            style={{ backgroundColor: 'white' }}
            renderItem={({ item }) => <Text style={{ padding: 5, fontSize: 14, height: 30 }}>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}
