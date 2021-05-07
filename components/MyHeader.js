import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert, Image} from 'react-native';

const MyHeader = props => {
  return (
    <Header
      leftComponent={<Image
      source = {require("../assets/barIcob.png")}
      style={{width:20, height:20}}/>}
      centerComponent={{ text: props.title, style: {color: '#000', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#FFFF01"
    />
  );
};

export default MyHeader;