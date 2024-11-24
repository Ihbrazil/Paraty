import React from 'react';
import { Text, View, Image } from 'react-native';

import Tirolesa from "../../assets/images/passeios/passeio01.png";
import Rafting from "../../assets/images/passeios/passeio02.png";
import Canoagem from "../../assets/images/passeios/passeio03.png";

import estilo from './estilos';

export default function TelaPasseios() {
  return (
    <View style={estilo.container}>
        
        <Text style={estilo.titulo}>Passeios em Paraty</Text>
        <Text style={estilo.descricao}>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja três exemplos:
        </Text>

        <View style={estilo.card}>
            <Text style={estilo.tituloCard}>Tirolesa</Text>
            <Image style={estilo.foto} source={Tirolesa}/>
        </View>
       
        <View style={estilo.card}>
            <Text style={estilo.tituloCard}>Rafting</Text>
            <Image style={estilo.foto} source={Rafting}/>
        </View>

        <View style={estilo.card}>
            <Text style={estilo.tituloCard}>Canoagem no mangue</Text>
            <Image style={estilo.foto} source={Canoagem}/>
        </View>
    
    </View>
  );
}