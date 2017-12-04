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

export default class ShareVideo extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'video',
      contentUrl: '',
      contentDescription: 'contentDescription',
      contentTitle: 'contentTitle',
      video: {
        localUrl: 'content://media/external/video/media/60561',
      },
      previewPhoto: {
        imageUrl: 'content://media/external/images/media/58898'
      }
    };
    this.state = {shareLinkContent: shareLinkContent};
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Videos',
      groupName: 'Download'
    })
    .then(v => console.log('sdsds', v))
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
          title='ShareVideo'
          onPress={this.shareLinkWithShareDialog.bind(this)}
        />
      </View>
    )
  }
}