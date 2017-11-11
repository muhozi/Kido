import React,{Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles,{colors} from '../styles';
export default class Btn extends React.Component {
  render() {
    return (
    	<View style={styles.btn}>
          <Text style={{color:'#fff'}}>{this.props.title}</Text>
      </View>
    );
  }
}