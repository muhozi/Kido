import React, { Component } from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native'
import {Btn} from '../components'
import AccountKit, { LoginButton, Color, StatusBarStyle } from 'react-native-facebook-account-kit'
import styles from '../styles';
class Login extends Component {
  state = {
    authToken: null,
    loggedAccount: null,
  }

  componentWillMount() {
    this.configureAccountKit()

    AccountKit.getCurrentAccessToken()
      .then(token => {
        if (token) {
          AccountKit.getCurrentAccount().then(account => {
            this.setState({
              authToken: token,
              loggedAccount: account,
            })
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
      console.warn('User canceled login')
      this.setState({})
    } else {
      AccountKit.getCurrentAccount().then(account => {
        this.setState({
          authToken: token,
          loggedAccount: account,
        })
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

  onLogoutPressed() {
    AccountKit.logout()
      .then(() => {
        this.setState({
          authToken: null,
          loggedAccount: null,
        })
      })
      .catch(e => console.log('Failed to logout'))
  }

  renderUserLogged() {
    const { id, email, phoneNumber } = this.state.loggedAccount

    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={() => this.onLogoutPressed()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Account Kit Id</Text>
        <Text style={styles.text}>{id}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.text}>{phoneNumber ? `${phoneNumber.countryCode} ${phoneNumber.number}` : ''}</Text>
      </View>
    )
  }

  renderLogin() {
    return (
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
    )
  }

  render() {
    return (
      <View style={styles.container}>{this.state.loggedAccount ? this.renderUserLogged() : this.renderLogin()}</View>
    )
  }
}


export default Login