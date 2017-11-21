import React, {Component} from 'react';
import {View,Text,AsyncStorage} from 'react-native';
import { Router, Scene, Route,Drawer, Modal, Stack} from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';
import Splash from './containers/Splash';
import Join from './containers/Join';
import Login from './containers/Login';
import Home from './containers/Home';
import WatchVideo from './containers/WatchVideo';
import reducers from './reducers';
import configureStore from './libs/configureStore';
import {HomeNavbar,LoginNavbar,MainNavbar,WatchNavBar} from './components';
const RouterWithRedux = connect()(Router);
const store = configureStore();
const customTextInputProps = {
  underlineColorAndroid: 'rgba(0,0,0,0)',
};
setCustomTextInput(customTextInputProps);
class App extends Component{
  render(){
    return (
      <View style={{ flex: 1 }}>
      <Provider store={store} /*persistor={persistor}*/>
      
        <RouterWithRedux>
          <Scene key="root" hideNavBar>
            <Scene key="splash" component={Splash} hideNavBar={true} initial/>
            <Scene key="join" component={Join} hideNavBar={false} navBar={HomeNavbar} title="Join"/>
            <Scene key="login" component={Login} hideNavBar={false} navBar={LoginNavbar} title="Login"/>
            <Scene key="home" component={Home} hideNavBar={false} navBar={MainNavbar} title="Home"/>
            <Scene key="watchvideo" component={WatchVideo} hideNavBar={false} navBar={WatchNavBar} title="Watch"/>
          </Scene>
        </RouterWithRedux>
        
      </Provider>
      </View>
    );
  }
}

export default App;