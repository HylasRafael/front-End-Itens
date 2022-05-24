import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useCallback, useState } from "react"
import { FlatList, ListRenderItem, Text, Button, TouchableOpacity, View } from "react-native"
import { StackParams } from "../../App";
import Item from "./models/itens"

const  data: Item[] = [
    {
        id: 1,
        nome: 'Hot-Dog',
        descricao: 'Lanche',
    },

    {
        id: 2,
        nome: 'Pepsi',
        descricao: 'Refrigerante',
    },

    {
        id: 3,
        nome: 'Maçã',
        descricao: 'Suco',
    }
]

type Props = NativeStackScreenProps < StackParams,'Home' >;



const Home: React.FC <Props> = (props) => {

    const [data, setData] = useState<Item[]>([])

    useFocusEffect (useCallback (() => {
        axios.get<Item[]>('http://localhost:4000/api/itens')
        .then((res) => {
            setData(res.data)
        })

        .catch((error) => {
            console.log(error);

        });

    }, []));

    const renderItem: ListRenderItem<Item> = ({item}) => {

        const itemClicado = () => {
            props.navigation.navigate('ItemScreen', {item: item})
        }

        return (
        <TouchableOpacity onPress={itemClicado}>
            <Text>{item.nome}</Text>
        </TouchableOpacity>
        )
    }

    const adicionarItem = () => {
        props.navigation.navigate('AdicionarItem')
    }   

    return (
        <View>
            <FlatList renderItem={renderItem}
            data={data}
            />
             <Button title="Adicionar Item" onPress={adicionarItem}/>
        </View>
    )
}

export default Home