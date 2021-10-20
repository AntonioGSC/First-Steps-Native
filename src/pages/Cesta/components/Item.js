import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

import Texto from '../../../components/Texto';

function Item({ item: { nome, imagem } }) {
  return (
    <View style={ estilos.item } >
      <Image style={ estilos.imagem } source={ imagem } />
      <Texto style={ estilos.nome } >{ nome }</Texto>
    </View>
  );
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    alignItems: 'center',
    padding: 16,
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 16,
    marginLeft: 12,
    color: '#464646',
  },
});

export default Item;

      {/* {lista.map(({ nome, imagem }) => {
        return (
          <View style={ estilos.item } key={ nome } >
            <Image style={ estilos.imagem } source={ imagem } />
            <Texto style={ estilos.nome } >{ nome }</Texto>
          </View>
        );
      })} */}