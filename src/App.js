import React from "react"
import { StyleSheet, SafeAreaView } from "react-native"

// import Minmax from './components/Minmax'
// import Primeiro from './components/Primeiro';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Tilulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import { useState } from "react";
// import Pai from "./components/direta/Pai";
// import Pai from "./components/indireta/Pai";
// import ContardorV2 from "./components/contador/ContardorV2";
// import Diferenciar from "./components/Diferenciar";
// import ParImpar from "./components/ParImpar";
// import Familia from './components/relacao/Familia';
// import Membro from "./components/relacao/Membro";
// import UsuarioLogado from "./components/UsuarioLogado";
//import ListaProdutos from "./components/produtos/ListaProdutos";
// import ListaProdutosV2 from "./components/produtos/ListaProdutoV2";
// import DigiteSeuNome from "./components/DigiteSeuNome"
// import Quadrado from "./components/layout/Quadrado"
// import FlexBoxV4 from "./components/layout/FlexBoxV4"
import Mega from "./components/mega/Mega"

export default () => (
    <SafeAreaView style={Style.App}>
        <Mega quantidadedenumeros={12}></Mega>
    </SafeAreaView>
)

const Style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})
