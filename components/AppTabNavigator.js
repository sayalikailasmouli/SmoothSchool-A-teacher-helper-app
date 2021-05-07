import * as React from 'react';
import {View,Text,Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import createAssignmentScreen from '../Screens/studyEnglishScreen';


export const AppTabNavigator=createBottomTabNavigator({
    
    CreateAssignment:{
        screen:createAssignmentScreen,
         navigationOptions:{
            tabBarIcon:<Image
            source={require('../assets/createassignmentlogo.png')}
            style={{width:20,height:20}}
            />,

            tabBarLabel:"Create-Assignment"
        }
    },
    
    
})