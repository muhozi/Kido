import React, {Component} from 'react';
import {Text,View,Animated,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
import styles,{variables,colors} from '../styles';
class MainNavbar extends React.Component{
  constructor(props) {
    super(props);

  }
  render(){
    return (
      <View style={{paddingBottom:3,flexDirection:'row',alignItems:'center',borderBottomWidth:variables.minWidth,borderColor: '#ccc',backgroundColor:colors.secondary}}>
        <View style={{flex:20,justifyContent:'center',marginRight:0,alignItems:'center',flexDirection:'row',padding:3,paddingLeft:10}}>
          <Text style={{color:'#fff',fontSize:15,}} >{this.props.title}{'\n'}</Text>
        </View>
      </View>
    );
  }
}
export default MainNavbar;