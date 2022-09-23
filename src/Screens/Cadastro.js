import React, { Component } from 'react'
import { View, Text, Button, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, LogBox } from 'react-native'

import Card from '../components/Card'
import Logo from '../../Icons/Logo'
import HolidayHome from '../Models/HolidayHome'
import HolidayHomeDatabase from '../Database/HolidayHomeDatabase'
import ImagePicker from 'react-native-image-crop-picker';

export default class Cadastro extends Component {


    constructor(props) {
        super(props)
        this.state = {
            filePath: '',
            titulo: "",
            tipo: "",
            finalidade: "",
            endereco: "",
            valor: "",
            lista: []


        }

        this.Listar()
    }






    Listar = () => {
        const banco = new HolidayHomeDatabase();
        banco.Listar().then(
            listaCompleta => {
                this.setState({ lista: listaCompleta })
            }
        )
    }

    Atualizar = (item) => {
        const banco = new HolidayHome();
        banco.Atualizar(item)
        this.Listar()
    }

    Cadastrar = (filePath, titulo, tipo, finalidade, endereco, valor) => {
        const anuncionovo = new HolidayHome(filePath, titulo, tipo, finalidade, endereco, valor);
        const banco = new HolidayHomeDatabase();
        banco.Inserir(anuncionovo).then(this.Listar)

    }

    adicionarimg = (filePath, title) => {
        const novaimagem = new Img(filePath, title);
        const db = new HolidayHomeDatabase();
        db.Insert(novaimagem).then(this.Listar());
    }

    selecionarImagem = image => {
        const source = { uri: image.path };
        this.setState({ filePath: source.uri });
        console.log("This is source.uri", source.uri, "Type OF: ", typeof (source.uri));
        console.log("filePath STATE", this.state.filePath);
    };


    tirarFoto = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
            waitAnimationEnd: false,
        }).then(image => {
            this.selecionarImagem(image);
            console.log(image);
        });
    }

    escolherGaleria = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false,
        }).then(image => {
            this.selecionarImagem(image);
            console.log(image);
        });
    }





    render() {
        return (
            <ScrollView style={estilo.body}>
                <View style={estilo.logo}>
                    <Logo />
                </View>




                <View style={estilo.body}>



                    <View style={estilo.preenche}>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>

                            <View style={estilo.caixaimg}>
                                {this.state.filePath === '' ? (

                                    <Text>Nenhuma imagem selecionada</Text>
                                ) : (
                                    <Image source={{ uri: this.state.filePath }} style={estilo.imagem} />
                                )}
                            </View>
                            <TouchableOpacity style={estilo.clique} onPress={this.escolherGaleria}>
                                <Text style={estilo.textbotao}>
                                    Clique aqui para selecionar Imagem
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.tirarFoto} style={estilo.tirarfoto} >
                                <Text style={estilo.textbotao}>Tirar uma foto</Text>
                            </TouchableOpacity>


                        </View>

                        <TextInput placeholder='  Titulo' onChangeText={(valorDigitado) => { this.setState({ titulo: valorDigitado }) }} style={estilo.input}></TextInput>
                        <TextInput placeholder='  Tipo' onChangeText={(valorDigitado) => { this.setState({ tipo: valorDigitado }) }} style={estilo.input}></TextInput>
                        <TextInput placeholder='  Finalidade' onChangeText={(valorDigitado) => { this.setState({ finalidade: valorDigitado }) }} style={estilo.input}></TextInput>
                        <TextInput placeholder='  Endereço' onChangeText={(valorDigitado) => { this.setState({ endereco: valorDigitado }) }} style={estilo.input}></TextInput>
                        <TextInput placeholder='  R$ 0,00' onChangeText={(valorDigitado) => { this.setState({ valor: valorDigitado }) }} style={estilo.input}></TextInput>


                        <View style={{marginBottom:40}}>
                            <TouchableOpacity style={estilo.botao} onPress={() => this.Cadastrar(this.state.filePath, this.state.titulo, this.state.tipo, this.state.finalidade, this.state.endereco, this.state.valor)} >
                                <Text style={estilo.textbotao}>Enviar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </ScrollView>
        )
    }
}

const
    estilo = StyleSheet.create({
        logo: {
            marginTop: 10
        },
        body: {
            backgroundColor: '#E3FFE2'
        },
        caixaimg: {
            width: 280,
            height: 200,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10

        },
        imagem: {
            width: 280,
            height: 200,
            borderRadius: 10

        },

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

        preenche: {
            alignItems: 'center',
            marginTop: 10


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
            borderColor: '#2A5A29',
            marginTop:10
        },
        tirarfoto: {
            width: 150,
            height: 40,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#2A5A29',
        },
        clique: {
            width: 250,
            height: 40,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#2A5A29',
            margin: 10,

        },
        textbotao: {
            color: '#2A5A29'
        }

    })