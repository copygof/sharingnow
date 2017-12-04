import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  Button,
  CameraRoll
} from 'react-native'
import {
  LoginButton,
  ShareDialog,
  ShareApi
} from 'react-native-fbsdk'

export default class SharePhoto extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'photo',
      // contentUrl: 'https://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html',
      contentUrl: '',
      photos: [{
        imageUrl: 'content://media/external/images/media/58900',
      },
      {
        imageUrl: 'content://media/external/images/media/58898',
        // caption: 'caption',
        userGenerated: true
      }
      ],
    };
    this.state = {shareLinkContent: shareLinkContent};
  }

  

  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent).then(
      (canShow) => {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      }
    ).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Share cancelled');
        } else {
          console.log('Share success with postId: ' + result.postId);
        }
      },
      (error) => {
        console.log('Share fail with error: ' + error);
      }
    );
  }
  render() {
    return (
      <View style={{ marginBottom: 15 }}>
        <Button
          title='SharePhoto'
          onPress={this.shareLinkWithShareDialog.bind(this)}
        />
      </View>
    )
  }
}