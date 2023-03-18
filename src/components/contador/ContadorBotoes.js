import React from "react";
import { Button, View, StyleSheet } from "react-native";

export default props =>{
    return(
        <>
            <View style={Style.Botoes}>
                <Button title="+" onPress={props.inc}/>
                <Button title="-" onPress={props.dec}/>
            </View>
        </>
    )
}

const Style = StyleSheet.create({
    Botoes: {
        display: "flex",
        flexDirection: "row"
    }
})