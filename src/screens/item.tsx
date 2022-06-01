import { NativeStackScreenProps } from "@react-navigation/native-stack"
import Mercedes from "../../assets/Mercedes-AMG G 63.jpg"
import React from "react"
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native"
import { StackParams } from "../../App"

const style = StyleSheet.create ({                      /*Local onde se edita os componentes da pagina(CSS)*/

    mercedes: {
        width:200,
        height:150,
        borderRadius:10,
        borderColor:'#black',
        marginTop:20,
        alignItems: 'center',

    },

    Button:{
        backgroundColor:'#f44336',
        border:'nome',
        width:250,
        color: 'white',
        margin: '10px',
        padding: 15,        
        textAlign: 'center',
        display:'flex',
        fontSize:16,


    }

    
})



type Props = NativeStackScreenProps<StackParams, 'EditarItem'>;                     /*Comando de navegação, direciona para a pagina editaritem.tsx */
const ItemScreen: React.FC<Props> = (props) => {
    
    const item = props.route.params.item;

    return (
        <View>
            <Text>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Image style={style.mercedes} source = {Mercedes} />
            <TouchableOpacity style={style.Button} onPress={() => {props.navigation.navigate ('EditarItem', {item:item})}}>
                <Text>Editar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ItemScreen;                                                          /*Exporta todo o conteudo da pagina para ser importado na pagina que deseja utilzar*/