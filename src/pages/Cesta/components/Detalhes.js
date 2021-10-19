import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../components/Texto';

import logo from '../../../../assets/logo.png';

function Detalhes() {
  return (
    <>
      <Texto style={estilos.nome}>Cesta de verduras</Texto>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.imagemFazenda} />
          <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>
          Uma cesta com produtos selecionados 
          cuidadosamente da fazenda 
          direto para sua cozinha
        </Texto>
      <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
  )
}

const estilos = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'MontserratRegular',
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
})

export default Detalhes;