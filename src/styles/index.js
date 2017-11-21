import {StyleSheet} from 'react-native';
import colors from './colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputContainer:{
    flexDirection:'row',
    margin:8,
    paddingBottom:1,
    paddingTop:1,
    paddingLeft:5,
    backgroundColor:'#fff',
    marginTop:30,
    borderWidth:StyleSheet.hairlineWidth,
    borderRadius:50,
  },
  searchInputContainer:{
    flexDirection:'row',
    //margin:8,
    paddingBottom:1,
    //paddingTop:1,
    //paddingLeft:5,
    backgroundColor:'#fff',
    paddingLeft:0,
    //marginTop:30,
    //borderWidth:StyleSheet.hairlineWidth,
    borderRadius:20,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    marginTop:0,
    height:30,
    alignItems:'center',
    marginLeft:0,
  },
  closeInputButton:{
    alignItems:'center',justifyContent:'center',backgroundColor:'rgba(255,255,255,0.3)',borderRadius:60,padding:3,width:40,height:30,marginRight:30,
  },
  searchInputButton:{
    alignItems:'center',justifyContent:'center',backgroundColor:'#fff',borderRadius:60,padding:3,width:40,height:30,marginRight:25,borderTopLeftRadius:0,borderBottomLeftRadius:0
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor:'red'
  },
  inputRow:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:10
  },
  btn:{
    backgroundColor:'rgba(233, 57, 183,0.8)',
    marginLeft:10,
    marginRight:10,
    marginTop:20,
    marginBottom:20,
    padding:10,
    borderRadius:25,
    height:50,
    justifyContent:'center',
    alignItems:'center'
  }

});
const variables = {
  minWidth: StyleSheet.hairlineWidth,
}
export default styles;
export{
  colors,
  variables
}