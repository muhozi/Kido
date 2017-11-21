import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import {Actions} from "react-native-router-flux";
import {Btn} from '../components'
import AccountKit, { LoginButton, Color, StatusBarStyle } from 'react-native-facebook-account-kit';
import styles from '../styles';
class Login extends Component {
  state = {

  }
  componentWillMount() {
    this.configureAccountKit()
    AccountKit.getCurrentAccessToken()
      .then(token => {
        if (token) {
          AccountKit.getCurrentAccount().then(account => {
            Actions.home();
          })
        } else {
          console.log('No user account logged')
        }
      })
      .catch(e => console.log('Failed to get current access token', e))
  }
  configureAccountKit() {
    AccountKit.configure({
      theme: {
        //backgroundColor:       Color.rgba(0,120,0,0.1),
        //buttonBackgroundColor: Color.rgba(0, 153, 0, 1.00),
        //buttonDisabledBackgroundColor: Color.rgba(100, 153, 0, 0.5),
        //buttonBorderColor:     Color.rgba(0,255,0,1),
        //buttonTextColor:       Color.rgba(0,255,0,1),
        //headerBackgroundColor: Color.rgba(0, 153, 0, 1.00),
        //headerTextColor:       Color.rgba(0,255,0,1),
        //headerButtonTextColor: Color.rgba(0,255,0,1),
        //iconColor:             Color.rgba(0,255,0,1),
        //inputBackgroundColor:  Color.rgba(0,255,0,1),
        //inputBorderColor:      Color.hex('#ccc'),
        //inputTextColor:        Color.hex('#0f0'),
        //textColor:             Color.hex('#0f0'),
        //titleColor:            Color.hex('#0f0'),
        //backgroundImage:       "background.png",
        //statusBarStyle:        StatusBarStyle.LightContent,
      },
      //countryWhitelist: [ "AR", "BR", "US" ],
      //countryBlacklist: [ "BR" ],
      //defaultCountry: "AR"
      initialEmail: '',
      initialPhoneCountryPrefix: '+250',
      initialPhoneNumber: '7',
    })
  }

  onLogin(token) {
    if (!token) {
      //console.warn('User canceled login')
      this.setState({})
    } else {
      AccountKit.getCurrentAccount().then(account => {
        Actions.home({type:'reset'});
      })
    }
  }

  onLoginError(e) {
    console.log('Failed to login', e)
  }

  onEmailLoginPressed() {
    AccountKit.loginWithEmail()
      .then(token => {
        this.onLogin(token)
      })
      .catch(e => this.onLoginError(e))
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <LoginButton
            style={[styles.btn]}
            type="phone"
            onLogin={token => this.onLogin(token)}
            onError={e => this.onLogin(e)}
          >
            <Text style={styles.buttonText}>SMS</Text>
          </LoginButton>

          <TouchableOpacity onPress={() => this.onEmailLoginPressed()}>
            <Btn title="Login with email" color="rgba(0,0,0,0.5)"/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default Login