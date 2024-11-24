import React from 'react';
import { Text, View, Image } from 'react-native';

import ArmazenMar from "../../assets/images/restaurantes/restaurante01.png";
import Bendita from "../../assets/images/restaurantes/restaurante02.png";
import SereiaDoMar from "../../assets/images/restaurantes/restaurante03.png";

import estilo from './estilos';

export default function TelaRestaurantes() {
  return (
    <View style={estilo.container}>
        
        <Text style={estilo.titulo}>Bares e Restaurantes</Text>
        <Text style={estilo.descricao}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.</Text>

        <View style={estilo.card}>
            <Image style={estilo.foto} source={ArmazenMar}/>
            <Text style={estilo.tituloCard}>Armazén Mar</Text>
            <Text style={estilo.descricaoCard}>Localização: Rod Rio-Santos</Text>
        </View>
       
        <View style={estilo.card}>
            <Image style={estilo.foto} source={Bendita}/>
            <Text style={estilo.tituloCard}>Bendita's Restaurante</Text>
            <Text style={estilo.descricaoCard}>Localização: Centro Histórico</Text>
        </View>

        <View style={estilo.card}>
            <Image style={estilo.foto} source={SereiaDoMar}/>
            <Text style={estilo.tituloCard}>SEREIA DO MAR PIZZA-BAR</Text>
            <Text style={estilo.descricaoCard}>Localização: Praia do Jabaquara</Text>
        </View>
    </View>
  );
}