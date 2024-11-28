import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

export default function Cadastro2({ navigation }) {
  const Cadastro1 = () => {
    navigation.navigate('Cadastro1');
  };
  const Home = () => {
    navigation.navigate('MenuParceiro', { screen: 'HomeParceiro' });
  };
  return (
    <View style={estilos.container}>
      <View style={estilos.icon}>
        <Feather
          name={'chevron-left'}
          size={45}
          color={'#aaa'}
          onPress={Cadastro1}
        />
      </View>
      <Text style={estilos.title}>Quase lá!</Text>
      <Text style={estilos.text}>CEP*</Text>
      <TextInput style={estilos.input} />
      <Text style={estilos.text}>Rua*</Text>
      <TextInput style={estilos.input} />
      <Text style={estilos.text}>Número*</Text>
      <TextInput style={estilos.input} />
      <Text style={estilos.text}>Complemento</Text>
      <TextInput style={estilos.input} />
      <Text style={estilos.text}>Bairro*</Text>
      <TextInput style={estilos.input} />
      <Text style={estilos.text}>Estado*</Text>
      <TextInput style={estilos.input} />
      <Text style={estilos.text}>Cidade*</Text>
      <TextInput style={estilos.input} />
      <TouchableOpacity style={estilos.button} onPress={Home}>
        <Text style={estilos.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 0,
  },
  title: {
    fontSize: 35,
    color: '#cc64a0',
    marginBottom: 10,
  },
  text: {
    textTransform: 'uppercase',
    color: '#cc64a0',
    fontSize: 15,
    marginBottom: 5,
    width: '100%',
    justifyContent: 'flex-start',
    marginLeft: 125,
  },
  input: {
    width: width - 100,
    height: '5%',
    paddingLeft: 10,
    backgroundColor: '#f3b1c7',
    marginBottom: 15,
    borderRadius: 15,
    fontSize: 15,
    zIndex: 5,
  },
  button: {
    padding: 70,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#93b7b3',
    borderRadius: 100,
    marginTop: 5,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
});
