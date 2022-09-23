import React, { Component } from 'react'
import { View, Text, Button, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image, LogBox } from 'react-native'

import HolidayHome from '../Database/HolidayHomeDatabase'
import Card from '../components/Card'
import Logo from '../../Icons/Logo'
import ImagePicker from 'react-native-image-crop-picker';






export default class Lista extends Component {

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

  Atualizar = (item) => {
    const banco = new HolidayHome();
    banco.Atualizar(item)
    this.Listar()
  }
  
    // TIPO O CONTROLLER, MAS SEM O MVC oficial
  Listar = () => {
    const banco = new HolidayHome();
    banco.Listar().then(
      listaCompleta => {
        this.setState({ lista: listaCompleta })
      }
    )
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
                <Text style={estilo.texteanuncio}>Anúncios</Text>

        <View>
        {
            this.state.lista.map(
              item => (
                <Card
                  key={item.id}
                  item={item}
                  id={item.id}
                  filePath={item.filePath}
                  titulo={item.titulo}
                  tipo={item.tipo}
                  finalidade={item.finalidade}
                  endereco={item.endereco} 
                  valor={item.valor}
                 // assumir={this.Atualizar}
                 // deletar={this.Remover}  Aqui tem que colocar a funcao Remover, era pra estar nessa tela e náo na outra
                />
              )
            )
          }
      

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
    texteanuncio:{
      fontSize:20,
      marginLeft: 25,
      marginTop:15,
      marginBottom:15,
      color:'#663019'
    },
    logo: {
      marginTop: 10
  },

  })

  