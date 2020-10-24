import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginScreen from './screens/LoginScreen'
import RoleSelection from "./screens/RoleSelection"
import LoadingScreen from "./screens/LoadingScreen"

import firebase from 'firebase'
import { firebaseConfig } from './config'
firebase.initializeApp(firebaseConfig)

export default function App() {
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen : LoadingScreen,
  LoginScreen:LoginScreen,
  RoleSelection:RoleSelection,

})

const AppNavigator = createAppContainer (AppSwitchNavigator);