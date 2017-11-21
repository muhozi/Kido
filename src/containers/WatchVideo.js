import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Orientation from 'react-native-orientation';
import YouTube from 'react-native-youtube'
import * as Animatable from 'react-native-animatable';
import {Actions} from "react-native-router-flux";
import styles,{colors} from '../styles';
import {Input,Btn} from '../components';
import AccountKit from 'react-native-facebook-account-kit';
class WatchVideo extends Component {
  constructor(props) {
    super(props);
    state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true,
      isLooping: true,
      duration: 0,
      currentTime: 0,
      fullscreen: false,
      containerMounted: false,
      containerWidth: null,
    };
  }
  logout() {
    AccountKit.logout()
      .then(() => {
        Actions.login({type:'reset'});
      })
      .catch(e => console.log('Failed to logout'))
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.secondary} hidden={false}/>
        <ScrollView>
          <YouTube
            videoId={this.props.video.snippet.resourceId.videoId}   // The YT video ID
            play={true}             // control playback of video with true/false
            onFullScreenEnter={() => Orientation.unlockAllOrientations()}
            onFullScreenExit={() => Orientation.lockToPortrait()}
            fullscreen={false}       // control whether the video should play in fullscreen or inline
            loop={true}             // control whether the video should loop when ended
            apiKey="" // ☻ Whatever I'll Change It, Hhhhh
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{height: 200,padding:5 }}
          />
          <View style={{padding:20}}>
            <Text style={{color:colors.secondary,paddingBottom:20}}>{this.props.video.snippet.title}</Text>
            <Text style={{paddingBottom:20}}>{this.props.video.snippet.description}</Text>
          </View>
          <TouchableOpacity onPress={() => this.logout()}>
            <Btn title="Leave kido" color="#fff"/>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
function mapStateToProps (state) {
  return {
    
  }
}

function mapDispatchToProps (dispatch) {
  return {
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchVideo)