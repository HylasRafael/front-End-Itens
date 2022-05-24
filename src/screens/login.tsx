import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";
import { StackParams } from '../../App';


const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'center',
        padding:32,
        backgroundColor:'#363636',
    },

input: {
    fontSize: 18,
    borderWidth: 1,
    backgroundColor: '#DCDCDC'
},

linkNewUser: {
    fontSize: 12,
}



});

type Props = NativeStackScreenProps < StackParams,'Login' >;

const LoginScreen: React.FC <Props> = (Props) => {
    const [mostrarSucesso, setMostrarSucesso] = useState(false)
    
    const [mostrarErro, setMostartErro] = useState(false)

    const [userName, setUserName] = useState ('')

    const [passoword, setPassword] = useState('')

    



    const botaoLoginPressionado = () => {
        if (userName==='adm' && passoword === '123') {
            setMostrarSucesso(true)
            setMostartErro(false)
            Props.navigation.navigate('Home')
        } else {
            setMostartErro(true)
        }
    }

    return (
        <View style={styles.container}>

            {
                mostrarSucesso && (
                    <Text style={styles.sucesso} > Welcome</Text>
                )
            }

            {
                mostrarErro &&(
                    <Text style={styles.erro}> Login Error </Text>
                )
            }

            <TextInput style={styles.input} placeholder='User Name' onChangeText={setUserName}/>

            <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword}/>

            <Button title='Login' onPress={ botaoLoginPressionado }/>

            <TouchableOpacity onPress={ () => {} } >
            <Text style={styles.linkNewUser}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen