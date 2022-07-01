import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class MyApp extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={{width:"100%",height:"100%"}}>
        <View style={{width:"100%",justifyContent:'center',height:50,backgroundColor:'black'}}>
         <Text style={{color:'white',marginLeft:10,fontSize:16}}>App Bar</Text>
        </View>
        <View style={{width: "100%",height: "100%",alignItems:'center',justifyContent:'center'}}>
          <Text style={{ color: 'black',fontWeight:'bold',fontSize: 16 }}>Hallo Uday</Text>
        </View>
      </View>
    );
  }
}