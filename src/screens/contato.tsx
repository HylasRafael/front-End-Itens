import React from 'react';
import { View, Text } from 'react-native';

const Contato:React.FC <Props> = (Props) => {

    const botaoContatoPressionado = () => {
        Props.navigation.navigate('Contato');
    }
    

    return (
        <View>
            <Text>Teste</Text>
        </View>    
    )
}

export default Contato