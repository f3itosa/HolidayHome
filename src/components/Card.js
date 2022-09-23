import React, { Component } from 'react'
import { View, Text, Button, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, LogBox } from 'react-native'

import HolidayHome from '../Database/HolidayHomeDatabase'
import ImagePicker from 'react-native-image-crop-picker';







export default class Card extends Component {

    Atualizar = (item) => {
        const banco = new HolidayHome();
        banco.Atualizar(item)
        this.Listar()
    }

    Cadastrar = (filePath, titulo, tipo, finalidade, endereco, valor) => {
        const anuncionovo = new HolidayHome( filePath,titulo, tipo, finalidade, endereco, valor);
        const banco = new HolidayHomeDatabase();
        banco.Inserir(anuncionovo).then(this.Listar)
      
    }


    render() {
        return (

            <ScrollView>

                

                <View style={{ alignItems: 'center' }}>

                   
                    <View style={estilo.inputanuncio}>
                        <View style={{alignItems:'center', marginTop:15}}>
                        <Image source={{ uri: this.props.filePath }} style={estilo.imagem} ></Image>
                        </View>
                        <View style={{ marginLeft:10, marginTop:15 }}>
                        <Text style={estilo.textinput}>Titulo:{this.props.titulo}</Text>
                        <Text style={estilo.textinput}>Tipo: {this.props.tipo}</Text>
                        <Text style={estilo.textinput}>Finalidade: {this.props.finalidade}</Text>
                        <Text style={estilo.textinput}>Endereço: {this.props.endereco}</Text>
                        <Text style={estilo.textinput}>R$: {this.props.valor}</Text>
                        </View>


                    </View>
                </View>





            </ScrollView>

        )
    }
}

const
    estilo = StyleSheet.create({

        input: {
            borderRadius: 10,
            marginTop: 10,
            height: 40,
            width: 280,
            borderWidth: 2,
            justifyContent: 'center',
            borderColor: '#2A5A29',
            backgroundColor: '#ffffff'

        },
        textinput:{
            color:'#000000',
            marginTop:7

        },
        imagem: {
            width: 250,
            height: 150,
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 10

        },

        preenche: {
            alignItems: 'center',
            marginTop: 200


        },
        botao: {
            width: 140,
            height: 40,
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: "center",
            borderRadius: 10,
            padding: 5,
            margin: 5,
            color: '#2A5A29',
            borderWidth: 2,
            borderColor: '#2A5A29'
        },
        textbotao: {
            color: '#2A5A29'
        },
        inputanuncio: {
            backgroundColor: '#ffffff',
            width: 300,
            borderRadius: 10,
            marginBottom: 5,
            height: 350,
            marginTop: 5,
            margin: 2,
            borderColor: '#2A5A29',
            borderWidth: 2,
            marginRight: 15
        }

    })