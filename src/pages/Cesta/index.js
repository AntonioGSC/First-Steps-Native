import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Detalhes from './components/Detalhes';
import Texto from '../../components/Texto';
import Topo from './components/Topo';
import Item from './components/Item';

function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList 
        data={ itens.lista }
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return(
            <>
              <Topo { ...topo }/>
              <View style={ estilos.cesta }>
                <Detalhes { ...detalhes }/>
                <Texto style={ estilos.titulo }>{ itens.titulo }</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  )
}

const estilos = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})

export default Cesta;
