import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {Actions} from 'react-native-router-flux';
import AccountKit, { LoginButton, Color, StatusBarStyle } from 'react-native-facebook-account-kit';
import styles from '../styles';
class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    //setTimeout(()=>{
    this.configureAccountKit()

    AccountKit.getCurrentAccessToken()
      .then(token => {
        if (token) {
          AccountKit.getCurrentAccount().then(account => {
            Actions.home({type: 'reset'});
          })
        } else {
          Actions.login({type: 'reset'});
        }
      })
      .catch(e => console.log('Failed to get current access token', e))
      
    //},3000);
  }
  configureAccountKit() {
    AccountKit.configure({
      theme: {
        // backgroundColor:       Color.rgba(0,120,0,0.1),
        // buttonBackgroundColor: Color.rgba(0, 153, 0, 1.00),
        // buttonDisabledBackgroundColor: Color.rgba(100, 153, 0, 0.5),
        // buttonBorderColor:     Color.rgba(0,255,0,1),
        // buttonTextColor:       Color.rgba(0,255,0,1),
        // headerBackgroundColor: Color.rgba(0, 153, 0, 1.00),
        // headerTextColor:       Color.rgba(0,255,0,1),
        // headerButtonTextColor: Color.rgba(0,255,0,1),
        // iconColor:             Color.rgba(0,255,0,1),
        // inputBackgroundColor:  Color.rgba(0,255,0,1),
        // inputBorderColor:      Color.hex('#ccc'),
        // inputTextColor:        Color.hex('#0f0'),
        // textColor:             Color.hex('#0f0'),
        // titleColor:            Color.hex('#0f0'),
        // backgroundImage:       "background.png",
        // statusBarStyle:        StatusBarStyle.LightContent,
      },
      //countryWhitelist: [ "AR", "BR", "US" ],
      //countryBlacklist: [ "BR" ],
      //defaultCountry: "AR"
      initialEmail: '',
      initialPhoneCountryPrefix: '+250',
      initialPhoneNumber: '7',
    })
  }
  render() {
    return (
      <View style={styles.splashContainer}>
      <StatusBar backgroundColor="#fff" hidden={true}/>
        <Animatable.Image
          animation="zoomIn"
          style={{width: 300, height: 58,resizeMode:'contain'}}
          source={require('../images/logo.png')}/>
        
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    // appData: state.dataApp,
    // count: state.counter
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // getToken: (data) => dispatch(loadToken(data)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash)