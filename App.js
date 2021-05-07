
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainScreen from './Screens/MainScreen';
import welcomeScreen from './Screens/welcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator'
import {createDrawerNavigator} from 'react-navigation-drawer';
import studyEnglishScreen from './Screens/studyEnglishScreen';
import SettingScreen from './Screens/SettingScreen';
import contactUs from './Screens/contactUs';
import customSidebarMenu from './components/customSideBarMenu';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer/>
      </SafeAreaProvider>
  );
}
const TabNavigator = createBottomTabNavigator({
  MainScreen: {screen: MainScreen},
 studyEnglishScreen: {screen:studyEnglishScreen},


},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "MainScreen"){
        return(
          <Image
          source={require("./assets/homescreengiflogo.gif")}
          style={{width:20, height:20}}
        />
        )

      }
      else if(routeName === "studyEnglishScreen"){
        return(
          <Image
          source={require("./assets/studyeglishgiflogo.gif")}
          style={{width:25, height:25,}}
        />)

      }
    }
  })
}
);

const AppDrawNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
    },
  Settings : {
    screen : SettingScreen
    },
    ContactUs : {
      screen : contactUs
     },
  },
  
  {
    contentComponent:customSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })

const switchNavigator = createSwitchNavigator({
  welcomeScreen:{screen: welcomeScreen},
  AppDrawNavigator : AppDrawNavigator,
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);