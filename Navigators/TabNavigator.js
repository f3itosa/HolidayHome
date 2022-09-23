import React, { Component } from 'react'
import Home from '../src/Screens/Home'
import Cadastro from '../src/Screens/Cadastro'
import Lista from '../src/Screens/Lista'

import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default class TabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#663019', }} >


                <Tab.Screen component={Home}
                    options={{ tabBarIcon: ({ color, size }) => (<Icon name="home-outline" color={color} size={30} />) }} name="Inicio" />


                <Tab.Screen style={{ color: 'red' }} component={Cadastro}
                    options={{ tabBarIcon: ({ color, size }) => (<Icon name="add-circle-outline" color={color} size={30} />) }} name="Adicionar" />

                <Tab.Screen style={{ color: 'red' }} component={Lista}
                    options={{ tabBarIcon: ({ color, size }) => (<Icon name="filter-sharp" color={color} size={30} />) }} name="Anúncios" />




            </Tab.Navigator>
        )
    }
}