import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Detalhes from './components/Detalhes';
import Topo from './components/Topo';
import Itens from './components/Itens';

function Cesta({ topo, detalhes, itens }) {
  return (
    <ScrollView>
      <Topo { ...topo }/>
      <View style={ estilos.cesta }>
        <Detalhes { ...detalhes }/>
        <Itens { ...itens }/>
      </View>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})

export default Cesta;
