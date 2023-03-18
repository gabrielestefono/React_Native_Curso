import React from "react";
import { Text, View,StyleSheet } from "react-native";
import Estilo from "../estilo"

export default ({num})=>{
    return(
        <View style={Style.container}>
            <Text style={[Estilo.txtG, Style.Num]}>
                {num}
            </Text>
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        width: 50,
        height: 50,
        backgroundColor: "black",
        margin: 5,
        borderRadius: 25
    },
    Num:{
        color: '#fff'
    }
})