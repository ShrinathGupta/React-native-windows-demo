import React, { Component } from 'react';
import { View, Text, Button, Linking, CheckBox, FlatList, Image } from 'react-native';
import styles from './styles';

export default class Column1 extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      click: '',
      Visible: false,
      checked: true,
      dataSource: {}
    };
  }
  componentDidMount() {
    let items = [
      {
        id: 1,
        src: 'https://www.gstatic.com/webp/gallery/1.jpg',
        text: 'Image1'
      },
      {
        id: 2,
        src: 'https://www.gstatic.com/webp/gallery/2.jpg',
        text: 'Image2'
      },
      {
        id: 3,
        src: 'https://www.gstatic.com/webp/gallery/3.jpg',
        text: 'Image3'
      },
      {
        id: 4,
        src: 'https://www.gstatic.com/webp/gallery/5.jpg',
        text: 'Image4'
      },
      {
        id: 5,
        src: 'https://www.gstatic.com/webp/gallery3/2.png',
        text: 'Image5'
      },
      {
        id: 6,
        src: 'https://www.gstatic.com/webp/gallery3/3.png',
        text: 'Image6'
      },
      {
        id: 7,
        src: 'https://www.gstatic.com/webp/gallery/1.jpg',
        text: 'Image7'
      },
      {
        id: 8,
        src: 'https://www.gstatic.com/webp/gallery/2.jpg',
        text: 'Image8'
      },
      {
        id: 9,
        src: 'https://www.gstatic.com/webp/gallery3/5.png',
        text: 'Image9'
      }
    ];
    this.setState({
      dataSource: items
    });
  }

  setVisible(visible) {
    this.setState({ Visible: visible });
  }
  handleClick = () => {
    this.setState({ click: 'Clicked' });
  };
  OpenClickLink() {
    Linking.openURL('https://www.google.com');
  }
  onChangeCheck() {}

  render() {
    return (
      <View>
        <View style={{ backgroundColor: 'grey', height: 30 }}>
          <Text style={{ fontSize: 18, color: 'white' }}>Buttons</Text>
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <View>
            <Button title="Button" color="#841584" />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Button
              title={this.state.click.length > 0 ? this.state.click : 'Click Me'}
              color="#846584"
              onPress={this.handleClick.bind(this)}
            />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Button title="Open Web link" color="#566584" onPress={this.OpenClickLink.bind(this)} />
          </View>
        </View>
        <View style={{ backgroundColor: 'grey', height: 30, marginTop: 20 }}>
          <Text style={{ fontSize: 18, color: 'white' }}>Grid View</Text>
        </View>
        <View style={{ height: 400, marginTop: 20, marginBottom: 20 }}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <Image
                  style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}
                  source={{ uri: item.src }}
                />
                <Text>{item.text}</Text>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index}
          />
        </View>
        {/* <Text>Checkbox</Text>
        <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 20 }}>
          <CheckBox title="sdf" disabled={this.state.checked} onChange={() => this.onChangeCheck()} />
        </View> */}
      </View>
    );
  }
}
