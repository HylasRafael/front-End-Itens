import { NativeStackScreenProps } from "@react-navigation/native-stack"
import Mercedes from "../../assets/Mercedes-AMG G 63.jpg"
import React from "react"
import { View, Text, StyleSheet, Image, Button } from "react-native"
import { StackParams } from "../../App"

const style = StyleSheet.create ({


    
})

type Props = NativeStackScreenProps<StackParams, 'EditarItem'>;
const ItemScreen: React.FC<Props> = (props) => {
    
    const item = props.route.params.item;

    return (
        <View>
            <Text>{item.descricao}</Text>
            <Image source={Mercedes} />
            <Button title="Editar" onPress={() => {props.navigation.navigate ('EditarItem', {item:item})}}/>
        </View>
    );
}

export default ItemScreen;