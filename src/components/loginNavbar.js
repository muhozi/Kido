import React, {Component} from 'react';
import {Text,View,Animated,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'
class LoginNavbar extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={{padding:5,paddingTop:60,alignItems:'center'}}>
        <Text style={{color:'#ae00ff',fontSize:20}} >{this.props.title}{'\n'}</Text>
        <Image
          style={{width: 300, height: 58,resizeMode:'contain'}}
          source={require('../images/logo.png')}/>
        
      </View>
    );
  }
}
export default LoginNavbar;