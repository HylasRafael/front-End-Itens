import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import { useCallback, useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import { StackParams } from "../../App";
import Item from "./models/itens";


type Props = NativeStackScreenProps<StackParams, 'EditarItem'>;

const EditarItem: React.FC <Props> = (props) => {

    const item = props.route.params.item;
    
    const botaoSalvarPressionado = () => {
        axios.put(`http://localhost:4000/api/itens/${item.id}`,{
            nome: nome,
            descricao: descricao
        })
        .then(() => {
            props.navigation.pop(1);
            
        })
        .catch(() => {
            alert('Erro')
        })
    }

   
    const [nome, setNome] = useState(item.nome);
    const [descricao, setDescricao] = useState(item.descricao)
    

        
    return(
        <View >
            <View>
                <TextInput placeholder='Nome' value={nome} onChangeText={setNome}/>
                <TextInput placeholder='Descrição' value={descricao} onChangeText={setDescricao}/>
            </View>
            <Button title="Salvar" onPress={botaoSalvarPressionado}/>
            <Button title="Cancelar" onPress={() => {props.navigation.pop(1)}}/>
        </View>
    )

};

export default EditarItem