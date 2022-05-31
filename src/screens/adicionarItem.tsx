import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useState } from "react";
import { Button, View, Text, TextInput } from "react-native";
import { StackParams } from "../../App";
import Item from "./models/itens";

type Props = NativeStackScreenProps < StackParams,'AdicionarItem' >;



const AdicionarItem: React.FC <Props> = (props) => {

    const [nome, seteNome] = useState('');
    const [descricao, setDescricao] = useState('')
    

    const botaoSalvarPressionado = () => {
        axios.post('http://localhost:4000/api/itens',{nome:nome,descricao:descricao})
        .then(() => {props.navigation.pop(1)})
        .catch(() => {alert('Erro')})
    }
    
    return (
        <View>
            <TextInput placeholder="Nome" onChangeText={seteNome}></TextInput>
            <TextInput placeholder="Descrição" onChangeText={setDescricao}></TextInput>            
            <Button title="Salvar" onPress={botaoSalvarPressionado}/>
        </View>
        
    )}

export default AdicionarItem

