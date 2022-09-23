import React, { Component } from 'react'
import { View, Text, Button, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './Navigators/TabNavigator';
import Logo from './Icons/Logo';
import ImagePicker from 'react-native-image-crop-picker';




const Tab = createBottomTabNavigator();


export default class App extends Component {
  render() {
    return (

      <>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </>
    )
  }
}

