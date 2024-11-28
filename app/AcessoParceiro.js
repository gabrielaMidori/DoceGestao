import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AcessoParceiro({ navigation }) {
  const LoginParceiro = () => {
    navigation.navigate('LoginParceiro');
  };
  const EscolherCadastro = () => {
    navigation.navigate('EscolherCadastro');
  };
  const Inicio = () => {
    navigation.navigate('Inicio');
  };
  return (
    <View style={estilos.container}>
      <View style={estilos.icon}>
        <Feather
          name={'chevron-left'}
          size={45}
          color={'#aaa'}
          onPress={Inicio}
        />
      </View>
      <Text style={estilos.title}>Bem-vindo(a)!</Text>
      <Image source={require('./imgs/logoParceiros.png')} style={estilos.img} />
      <View style={estilos.buttonPosition}>
        <TouchableOpacity style={estilos.buttonLogin} onPress={LoginParceiro}>
          <Text style={estilos.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={estilos.buttonCadastro}
          onPress={EscolherCadastro}>
          <Text style={estilos.cadastroText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
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
  img: {
    width: 250,
    height: 250,
    marginBottom: 40,
  },
  buttonPosition: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  buttonLogin: {
    marginRight: 10,
    backgroundColor: '#83c0b6',
    padding: 50,
    paddingTop: 10,
    paddingBottom: 12,
    borderRadius: 100,
  },
  title: {
    color: '#f3b2ca',
    fontSize: 40,
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
  },
  cadastroText: {
    color: '#83c0b6',
    fontSize: 20,
  },
  buttonCadastro: {
    borderColor: '#83c0b6',
    borderWidth: 1,
    padding: 49,
    paddingTop: 9,
    paddingBottom: 11,
    borderRadius: 100,
  },
  icon: {
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 20,
  }
});
