import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Estilo from '../estilo';

export default props =>{
    return(
        <Text style={textoMedio.TextM}>
        {props.nome} {props.sobrenome}
        </Text>
    )
}

let textoMedio = StyleSheet.create({
    TextM:{
        fontSize: 24,
    }
})