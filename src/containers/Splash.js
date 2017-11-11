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
import {Actions} from "react-native-router-flux";
import styles from '../styles';
class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    setTimeout(()=>{
      Actions.join({type: 'reset'});
    },3000);
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