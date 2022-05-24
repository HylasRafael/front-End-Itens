import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, View, Text, TextInput } from "react-native";
import { StackParams } from "../../App";
import Item from "./models/itens";

type Props = NativeStackScreenProps < StackParams,'AdicionarItem' >;




const AdicionarItem: React.FC <Props> = (props) => {
    
    return (
        <View>
            <TextInput placeholder="Nome" onChange={()=>{}}></TextInput>
            <TextInput placeholder="Descrição" onChange={()=>{}}></TextInput>
            <TextInput placeholder="Categoria" onChange={()=>{}}></TextInput>
            <Button title="Salvar" onPress={() => {}}/>
        </View>
        
    )}

export default AdicionarItem

