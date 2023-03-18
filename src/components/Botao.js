import React from "react";
import { Button } from "react-native";
import estilo from "./estilo";

export default props => {

    function executar(){
        console.warn("Foi #01!")
    }

    return (
        <>
            <Button 
            title="Executar #01"
            onPress={executar}
            />
            <Button 
            title="Executar #02"
            onPress={function nova(){
                console.warn("Foi #02!")
                }
            }
            />
            <Button 
            title="Executar #03"
            onPress={()=>{
                console.warn("Foi #03!")
                }
            }
            />
        </>
    )
}