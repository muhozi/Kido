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
export default styles;
export{
  colors
}