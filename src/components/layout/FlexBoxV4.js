import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default props =>{
    return (
        <View style={estilo.FlexV4}>
            <View style={estilo.V0}/>
            <View style={estilo.V1}/>
            <View style={estilo.V2}/>
        </View>
    )
}


const estilo = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        backgroundColor: '#000',
        width: 100
    },
    V0:{
        backgroundColor:"#36c9a7",
        height: 300,
    },
    V1:{
        backgroundColor:"#ff801a",
        flexGrow: 3,
    },
    V2:{
        backgroundColor:"#dd22c1",
        flexGrow: 1,
    }
})