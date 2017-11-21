import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import axios from 'axios';
import YouTube from 'react-native-youtube'
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
import * as Progress from 'react-native-progress';
import AccountKit from 'react-native-facebook-account-kit'
import {fetchVideos} from '../actions/videoActions';
import styles,{colors} from '../styles';
import {Input,Btn} from '../components';
class Home extends Component {
  constructor(props) {
    super(props);
    state = {
    }
  }
  componentWillMount(){
    this.props.fetchVideos();
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
      <View style={[styles.container,{backgroundColor:'#fff'}]}>
      <StatusBar backgroundColor={colors.secondary} hidden={false}/>
        <ScrollView style={{flex:1}}>
          {this.props.videos.fetching? <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingTop:150}}>
            <Progress.Circle size={60} indeterminate={true} color={colors.secondary}/>
          <Text style={{color: colors.primary}}>{'\n \n'}Loading</Text></View>: null}
          {this.props.videos.fetched?
          <View>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:colors.secondary,padding:5,fontSize:18}}>Scratch Programming</Text>
          </View>
          <FlatList
            data={this.props.videos.data.items}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
            <TouchableOpacity onPress={() => {Actions.watchvideo({'video': item})}}>
              <View style={{flex:1,flexDirection:'row',paddingBottom:5,paddingTop:5}}>
                <View style={{flex:3,paddingLeft:5}}>
                  <Image
                    style={{width: 105, height: 75}}
                    source={{uri: item.snippet.thumbnails.default.url}}
                  />
                </View>
                <View style={{flex:5,paddingLeft:0}}>
                  <Text>{item.snippet.title+'\n\n'}</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
          />
          <TouchableOpacity onPress={() => this.logout()}>
            <Btn title="Leave kido" color="#fff"/>
          </TouchableOpacity>
          </View>

        :null}
          </ScrollView>
          </View>
    );
  }
}
function mapStateToProps (state) {
  return {
    videos: state.videos,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)