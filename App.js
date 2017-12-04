import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  Button
} from 'react-native';
import {
  LoginButton,
  ShareDialog,
  ShareApi
} from 'react-native-fbsdk'
import ShareContentWithDialog from './js/ShareContentWithDialog'
import ShareContentWithOutDialog from './js/ShareContentWithOutDialog'
import SharePhoto from './js/SharePhoto'
import ShareVideo from './js/ShareVideo'

// Share photo

// // Share photo
// class ShareVideo extends Component {
//   render() {
//     return (
//       <View>
        
//       </View>
//     )
//   }
// }


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ShareContentWithDialog />
          <ShareContentWithOutDialog />
          <SharePhoto />
          <ShareVideo />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  shareText: {
    fontSize: 20,
    margin: 10,
  },
});