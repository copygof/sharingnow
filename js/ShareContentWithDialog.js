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

export default class ShareContentWithDialog extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      // contentUrl: 'copygof://sss',
      contentUrl: 'https://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html',
      quote: 'copy link เขามานะ',
      commonParameters: {
        hashtag: '#hashtag'
      }
    };
    this.state = {shareLinkContent: shareLinkContent};
  }

  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent).then(
      function(canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      }
    ).then(
      function(result) {
        if (result.isCancelled) {
          alert('Share cancelled');
        } else {
          alert('Share success with postId: ' + result.postId);
        }
      },
      function(error) {
        alert('Share fail with error: ' + error);
      }
    );
  }
  render() {
    return (
      <View style={{ marginBottom: 15 }}>
        <Button
          title='Share Content With Dialog'
          onPress={this.shareLinkWithShareDialog.bind(this)}
        />
      </View>
    )
  }
}