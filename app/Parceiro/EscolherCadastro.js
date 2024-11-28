import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function EscolherCadastro({ navigation }) {
  const AcessoParceiro = () => {
    navigation.navigate('AcessoParceiro');
  };
  const Cadastro1 = () => {
    navigation.navigate('Cadastro1');
  };
  return (
    <View style={estilos.container}>
      <View style={estilos.icon}>
        <Feather
          name={'chevron-left'}
          size={45}
          color={'#aaa'}
          onPress={AcessoParceiro}
        />
      </View>
      <Text style={estilos.title}>Seja Parceiro</Text>
      <Text style={estilos.text}>Escolha uma forma de cadastro:</Text>
      <Image source={require('../imgs/fisica.png')} style={estilos.img} />
      <TouchableOpacity style={estilos.button} onPress={Cadastro1}>
        <Text style={estilos.buttonText}>Pessoa física</Text>
      </TouchableOpacity>
      <Image source={require('../imgs/juridica.png')} style={estilos.img} />
      <TouchableOpacity style={estilos.button} onPress={Cadastro1}>
        <Text style={estilos.buttonText}>Pessoa jurídica</Text>
      </TouchableOpacity>
      <View style={estilos.space}></View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  title: {
    fontSize: 35,
    color: '#cc64a0',
    marginBottom: 10,
  },
  text: {
    color: '#cc64a0',
    fontSize: 20,
    marginBottom: 25,
  },
  img: {
    width: 270,
    height: 150,
    marginTop: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#83c0b6',
    padding: 30,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 100,
    marginTop: -30,
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  space: {
    height: '10%',
  },
});
