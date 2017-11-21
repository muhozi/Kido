import React, {Component} from 'react';
import {Text,View,Animated,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
import styles,{variables,colors} from '../styles';
class WatchNavBar extends React.Component{
  constructor(props) {
    super(props);

  }
  render(){
    return (
      <View style={{paddingBottom:3,paddingRight:50, flexDirection:'row',alignItems:'center',backgroundColor:colors.secondary}}>
        <TouchableOpacity onPress={()=>{Actions.pop()}} style={{padding:3,paddingLeft:20}}>
        <View style={{flex:3,justifyContent:'center',marginRight:0,alignItems:'center',flexDirection:'row'}}>
          <Icon name="md-arrow-back" color="#fff" size={15}/>
        </View>
        </TouchableOpacity>
        <View style={{flex:20,justifyContent:'center',marginRight:0,alignItems:'center',flexDirection:'row',padding:3,paddingLeft:10}}>
          <Text style={{color:'#fff',fontSize:15,}} >{this.props.title}{'\n'}</Text>
        </View>
      </View>
    );
  }
}
export default WatchNavBar;