import React, { Component } from 'react'
import { View, Text, Button, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Logo from '../../Icons/Logo'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Cadastro from './Cadastro';




export default function Home () {


     const navigation = useNavigation();
    
        return (

            <ScrollView style={estilo.body}>
                <View >

                    <View style={estilo.logo}>
                        <Logo />
                    </View>

                    <View style={estilo.botoes}>

                       <TouchableOpacity onPress={() => navigation.navigate('Adicionar')} style={estilo.botao1}>
                          <Text style={estilo.textbotao}>Adicionar </Text>
                        </TouchableOpacity>

   

                        <TouchableOpacity onPress={() => navigation.navigate('Anúncios')} style={estilo.botao}>
                            <Text style={estilo.textbotao}> Ver casas disponiveis </Text>
                        </TouchableOpacity>


                    </View>





                </View>
            </ScrollView>
        )
    
}

const
    estilo = StyleSheet.create({
        logo: {
            marginTop: 150
        },
        body: {
            backgroundColor: '#E3FFE2'
        },
        botao1: {
            width: 150,
            height: 40,
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: "center",
            borderRadius: 10,
            padding: 5,
            margin: 5,
            color: '#663019',
            borderWidth: 2,
            borderColor: '#2A5A29',
            marginBottom:30
        },
        botao: {
            width: 200,
            height: 40,
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: "center",
            borderRadius: 10,
            padding: 5,
            margin: 5,
            color: '#663019',
            borderWidth: 2,
            borderColor: '#2A5A29'
        },
        botoes:{
            alignItems: 'center',
            marginTop: 70,
            marginVertical:60
        },
        textbotao:{
            color:'#663019'
        }
        

    })