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
  
  export default function Cadastro1({ navigation }) {
    const EscolherCadastro = () => {
      navigation.navigate('EscolherCadastro');
    };
    const Cadastro2 = () => {
      navigation.navigate('Cadastro2');
    };
    return (
      <View style={estilos.container}>
        <View style={estilos.icon}>
          <Feather
            name={'chevron-left'}
            size={45}
            color={'#aaa'}
            onPress={EscolherCadastro}
          />
        </View>
        <Text style={estilos.title}>Criar conta</Text>
        <Text style={estilos.subtitle}>Que bom te ver por aqui!</Text>
        <Text style={estilos.text}>Razão Social*</Text>
        <TextInput style={estilos.input} />
        <Text style={estilos.text}>Nome Fantasia*</Text>
        <TextInput style={estilos.input} />
        <Text style={estilos.text}>Email*</Text>
        <TextInput style={estilos.input} />
        <Text style={estilos.text}>Celular*</Text>
        <TextInput style={estilos.input} />
        <Text style={estilos.text}>Data de nascimento*</Text>
        <TextInput style={estilos.input} />
        <Text style={estilos.text}>CPF/CNPJ*</Text>
        <TextInput style={estilos.input} />
        <TouchableOpacity style={estilos.button} onPress={Cadastro2}>
          <Text style={estilos.textButton}>Continuar</Text>
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
      marginBottom: 10,
    },
    title: {
      fontSize: 35,
      color: '#cc64a0',
      marginBottom: 0,
    },
    subtitle: {
      fontSize: 20,
      color: '#cc64a0',
      marginBottom: 30,
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
      marginTop: 10,
    },
    textButton: {
      color: '#fff',
      fontSize: 20,
    },
  });
  