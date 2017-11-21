import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Animated,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Actions} from "react-native-router-flux";
import styles,{colors} from '../styles';
import {Input,Btn} from '../components';
class Join extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor={colors.secondary} hidden={false}/>
        <ScrollView>
          <Input placeholder="Name ..." icon="ios-person"/>
          <TouchableOpacity  onPress={()=>{Actions.login()}}>
            <Btn title="Continue"/>
          </TouchableOpacity>
          <View style={{padding:20,paddingTop:40}}>
            {/*<Text>Are you an instructor? </Text>*}
              {/*<TouchableOpacity >
                <Text style={{color:colors.secondary}}>Teach the kids</Text>
              </TouchableOpacity>*/}
            
          </View>
        </ScrollView>
      </View>
    );
  }
}
function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join)