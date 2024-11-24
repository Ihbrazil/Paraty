import React from 'react';
import { Text, View, Image } from 'react-native';

import Missanga from "../../assets/images/hospedagens/hospedagem01.png";
import MorroDoForte from "../../assets/images/hospedagens//hospedagem02.png";
import PortoImperial from "../../assets/images/hospedagens/hospedagem03.png";

import estilo from './estilos';

export default function TelaHospedagem() {
  return (
    <View style={estilo.container}>
        <Text style={estilo.titulo}>Pousadas e Hotéis em Paraty</Text>
        <Text style={estilo.descricao}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>

        <View style={estilo.card}>
            <Image style={estilo.foto} source={Missanga}/>
            <Text style={estilo.tituloCard}>Pousada Missanga</Text>
            <Text style={estilo.descricaoCard}>Valor médio: R$ 350,00</Text>
            <Text style={estilo.descricaoCard}>Localização: Próx. à Av. Roberto Silveira</Text>
        </View>
       
        <View style={estilo.card}>
            <Image style={estilo.foto} source={MorroDoForte}/>
            <Text style={estilo.tituloCard}>Pousada Morro do Forte</Text>
            <Text style={estilo.descricaoCard}>Valor médio: R$ 450,00</Text>
            <Text style={estilo.descricaoCard}>
            Localização: Próximo à Praia - Pontal</Text>
        </View>

        <View style={estilo.card}>
            <Image style={estilo.foto} source={PortoImperial}/>
            <Text style={estilo.tituloCard}>Pousada Porto Imperial</Text>
            <Text style={estilo.descricaoCard}>Valor médio: R$ 550,00</Text>
            <Text style={estilo.descricaoCard}>Localização: Centro Histórico</Text>
        </View>
    </View>
  );
}