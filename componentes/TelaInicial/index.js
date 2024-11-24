import React from 'react';
import { Text, View, Image, Button } from 'react-native';

import Paraty from "../../assets/images/Paraty.png";
import estilo from "./estilos.js";

export default function TelaInicial(props) {
  return (
    <View style={estilo.container}>
        <View style={estilo.cardParaty}>
            <Text style={estilo.titulo}>Paraty</Text>
            <Text style={estilo.paragrafo}>Saiba o que visitar em Paraty</Text>
            <Image source={Paraty} style={estilo.foto} />
            <View style={estilo.botao}>
                <Button
                    title = "VER RESTAURANTES"
                    onPress = { ()=>props.navigation.navigate("Restaurantes") }
                    color="#372d00"
                />
            </View>
            <View style={estilo.botao}>
                <Button
                    title = "VER PASSEIOS"
                    onPress = { ()=>props.navigation.navigate("Passeios")}
                    color="#372d00"
                />
            </View>
            <View style={estilo.botao}>
                <Button
                    title = "VER HOSPEDAGEM"
                    onPress = { ()=>props.navigation.navigate("Hospedagem")}
                    color="#372d00"
                />
            </View>
        </View>
    </View>
  );
}