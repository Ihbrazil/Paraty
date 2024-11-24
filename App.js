import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial/index.js';
import TelaRestaurantes from './componentes/TelaRestaurantes/index.js';
import TelaPasseios from "./componentes/TelaPasseios/index.js";
import TelaHospedagem from "./componentes/TelaHospedagem/index.js";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component = { TelaInicial } />
        <Stack.Screen name="Restaurantes" component = { TelaRestaurantes } />
        <Stack.Screen name="Passeios" component = { TelaPasseios } />
        <Stack.Screen name="Hospedagem" component = { TelaHospedagem } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}