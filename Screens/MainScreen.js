import React from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity,Alert,Modal,KeyboardAvoidingView,ScrollView} from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class MainScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:30,textAlign:'center'}}>
                    <Image>
                    source={require('../assets/3151-books.gif')}
                    </Image>
                </Text>
            </View>
        )
    }
}