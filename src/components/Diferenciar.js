import React from "react";
import { Text, Platform } from "react-native";
import Estilo from "./estilo";

export default () => {
    let mensagem;
    if(Platform.OS == "android"){
        mensagem = "Android";
    }else if(Platform.OS == "ios"){
        mensagem = 'iOS';
    }else{
        mensagem = "Eita!!!!";
    }
    return (
        <>
            <Text style={Estilo.txtG}>{mensagem}</Text>
        </>
    )
}