import React, {Component} from "react";
import { Text, TextInput,Button,View, StyleSheet } from "react-native";
import Estilo from "../estilo";
import MegaNumero from "./Numero";

export default class Mega extends Component{
    state = {
        quantidadedenumeros: this.props.quantidadedenumeros,
        numeros: []
    }

    alterarQuantidadeNumero = (qtde) => {
        this.setState({quantidadedenumeros: +qtde})
    }

    gerarNumerosNaoContidos = nums =>{
        const novo = parseInt(Math.random() * 60 + 1);
        return nums.includes(novo) ? this.gerarNumerosNaoContidos(nums) : novo
    }

    gerarNumeros = ()=>{
        const numeros = Array(this.state.quantidadedenumeros).fill().reduce(n => [...n, this.gerarNumerosNaoContidos(n)], []).sort((a,b)=>a-b);
        this.setState({numeros})
    }

    exibirNumeros = ()=>{
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero num={num} key={num}/>
        })
    }

    render(){
        return(
            <>
                <Text style={Estilo.txtG}>
                    Gerador de MegaSena
                </Text>
                <TextInput 
                keyboardType={'numeric'}
                style={{borderBottomWidth:1}}
                placeholder="Quantidade de Números" 
                value={`${this.state.quantidadedenumeros}`}
                onChangeText={qtde=>this.alterarQuantidadeNumero(qtde)}
                />
                <Button 
                title="Gerar" 
                onPress={this.gerarNumeros}></Button>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: 50
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}