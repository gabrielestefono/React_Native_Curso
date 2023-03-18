import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estilo from '../estilo';

export default props => {
    return(
        <>
            <View style={Style.Display}>
                <Text style={[Estilo.txtG, Style.DisplayText]}>
                    {props.num}
                </Text>
            </View>
        </>
    )
}

const Style = StyleSheet.create({
    Display: {
        backgroundColor: 'black',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: "white",
    }
})