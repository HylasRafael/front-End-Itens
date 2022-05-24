import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Alert, TouchableOpacity } from 'react-native';
import image from '../../assets/Mercedes-Logo-PNG-Photos.png'
import { Button } from 'react-native';
import React from 'react';

const style = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor: '#363636',
    justifyContent: 'center',
    alignItems: 'center',

  },
  
  titulo: {
    color: '#FFF',
    fontSize:24,
    fontWeight: 'bold'
  },

  subtitulo:{
    color: '#FFF'
  },

  image: {
    width:200,
    height:200,
    borderRadius:100,
    marginTop:20,
  },

  button: {        
    backgroundColor: '#fff',
    borderRadius: 3,
    

  }
  
  
})



const Onboarding: React.FC = () => {
  
  const botaoPressionado = () => {
    Alert.alert('Botão Pressionado')
  }
  
  return(
    <View style={style.container}>
      <Text style={style.titulo}>Mercedes-Benz</Text>
      <Text style={style.subtitulo}>The Best or Nothing</Text>
      <Image style={style.image} source ={image}/>
      <TouchableOpacity style={style.button} onPress={botaoPressionado}>
        <Text>Enter</Text>
      </TouchableOpacity> 
    </View>
  );
};


export default Onboarding;