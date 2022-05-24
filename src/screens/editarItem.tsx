import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TextInput, View, StyleSheet, Button } from "react-native";
import { StackParams } from "../../App";
import Item from "./models/itens";


type Props = NativeStackScreenProps<StackParams, 'EditarItem'>;
const EditarItem: React.FC <Props> = (props) => {
    const botaoPressionado = () => {
        props.navigation.navigate('EditarItem',{item:item});
    }
    
    const item = props.route.params.item;
    return(
        <View >
            <View>
                <TextInput placeholder={item.nome} onChangeText={() =>{}}/>
                <TextInput placeholder={item.descricao} onChangeText={() =>{}}/>
            </View>
            <Button title="Salvar" onPress={() => {}}/>
            <Button title="Cancelar" onPress={() => {}}/>
        </View>
    )

};

export default EditarItem