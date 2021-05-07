import React, { Component } from 'react';
import {View,Text, KeyboardAvoidingView,TextInput,StyleSheet,ScrollView,TouchableOpacity,Alert,Image} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config';



export default class contactUs extends React.Component{
  render(){
      return(
          <View style={styles.container}>
              <Image
              style={{ width: 200, height: 200 ,padding:150,margin:100}}
               source={require('../assets/contactus.gif')}
              />
             <Text style={styles.contactUsText}>
                 We heard that you found a issue in our app no worries.
                   <Text style={styles.gmailIdText}>This is our gmail-Id: contactus.creator@gmail.com</Text>

                  
             </Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    backgroundColor: '#0FD6E1',
    alignItems: 'center',
    justifyContent: 'center'
    },

   contactUsText:{
       fontSize:30,
       fontFamily:"monospace"
       
   },
   gmailIdText:{
       fontSize:30,
       textDecorationLine:'underline',
       textDecorationStyle:'solid',
       color:'gray'
   },
   button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: "#ff9800",
    marginHorizontal: 'auto',
    marginVertical: 15,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,

  },
  buttonText: {
    color: '#ffff',
    fontWeight: '200',
    fontSize: 20
  }
})