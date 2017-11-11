import React, {Component} from 'react';
import {View,Text,AsyncStorage} from 'react-native';
import { Router, Scene, Route,Drawer, Modal, Stack} from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import Splash from './containers/Splash';
import Join from './containers/Join';
import reducers from './reducers';
const RouterWithRedux = connect()(Router);
const store = configureStore();
class App extends Component{
  render(){
    return (
      <View style={{ flex: 1 }}>
      <Provider store={store} /*persistor={persistor}*/>
      
        <RouterWithRedux>
          <Modal key="app" hideNavBar>
            <Scene key="splash" component={Splash} hideNavBar/>
            <Scene key="join" component={Join} hideNavBar initial/>
          </Modal>
        </RouterWithRedux>
        
      </Provider>
      </View>
    );
  }
}

export default App;