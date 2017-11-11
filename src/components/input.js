import React,{Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,TextInput} from "react-native";
import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import styles,{colors} from '../styles';
export default class Input extends React.Component {
  render() {
    return (
      <View>
    	<View style={[styles.inputContainer,{borderColor:(this.props.error)?'red':colors.primary}]}>
          <View style={styles.inputRow}>{this.props.icon? <Icon name={this.props.icon} size={25} style={{color: '#ae00ff'}}/> : null}</View>
          <View style={{flex:12}}>
          <TextInput placeholder={this.props.placeholder} style={{color: colors.input}} maxLength={100} {...this.props} placeholderTextColor={colors.placeholder}  autoCorrect={false}/>
          </View>
      </View>
      {(this.props.error)?<Animatable.View animation='shake' style={{paddingLeft:30}}><Text style={{color: colors.error}}>{this.props.error}</Text></Animatable.View>:null}
      </View>
    );
  }
}