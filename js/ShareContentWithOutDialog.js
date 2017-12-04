import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  Button
} from 'react-native'
import {
  LoginButton,
  ShareDialog,
  ShareApi
} from 'react-native-fbsdk'

export default class ShareContentWithOutDialog extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html',
    };

    this.state = {shareLinkContent: shareLinkContent};
  }

  shareLinkWithShareDialog() {
    var tmp = this;
    ShareApi.canShare(this.state.shareLinkContent).then(
      function(canShare) {
        if (canShare) {
          return ShareApi.share(tmp.state.shareLinkContent, '/me', 'Some message ShareApi without Dialog.');
        }
      }
    ).then(
      function(result) {
        alert('Share operation with ShareApi was successful');
      },
      function(error) {
        alert('Share with ShareApi failed with error: ' + error);
      }
    )
  }
  render() {
    return (
      <View style={{ marginBottom: 15 }}>
        <Button
          title='Share Content WithOut Dialog'
          onPress={this.shareLinkWithShareDialog.bind(this)}
        />
      </View>
    )
  }
}