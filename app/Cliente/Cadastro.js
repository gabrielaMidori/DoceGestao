import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { app } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { TextInputMask } from 'react-native-masked-text';

const { width } = Dimensions.get('screen');

export default function CadastroCliente({ navigation }) {
  const [secureText, setSecureText] = useState(true);

  function verSenha() {
    setSecureText(!secureText);
  }
  const Inicio = () => {
    navigation.navigate('Inicio');
  };

  //Validações para efetuar o cadastro
  const schema = yup.object({
    nome: yup.string().required("Informe seu nome completo"),
    email: yup.string().email("Email inválido").required("Informe seu email"),
    cel: yup.string().required("Informe seu número de celular"),
    cpf: yup.string().required("Informe seu CPF"),
    senha: yup.string().min(8, "A senha deve ter pelo menos 8 dígitos").required("Informe sua senha")
  })
  const { control, handleSubmit, formState: { errors }, getValues } = useForm({
    resolver: yupResolver(schema)
  })

  //Cadastro do usuário no Firebase
  function Cadastro() {
    const auth = getAuth(app);

    //const nome = getValues('nome');
    const email = getValues('email');
    //const cel = getValues('cel');
    //const cpf = getValues('cpf');
    //const senha = getValues('senha');

    createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
          navigation.navigate('MenuCliente', { screen: 'HomeCliente' });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
  }

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
      <Text style={estilos.title}>Criar conta</Text>
      <Text style={estilos.subtitle}>Que bom te ver por aqui!</Text>
      <Text style={estilos.text}>Nome*</Text>
      <Controller
          control={control}
          name='nome'
          render={({ field: { onBlur, onChange, value}}) => (
          <TextInput style={[estilos.input, {borderWidth: errors.nome && 1, borderColor: '#f00'}]} onBlur={onBlur} value={value} onChangeText={onChange} />
        ) }
      />
      {errors.nome && <Text style={estilos.erro}>{errors.nome.message}</Text>}
      <Text style={estilos.text}>Email*</Text>
      <Controller
          control={control}
          name='email'
          render={({ field: { onBlur, onChange, value}}) => (
          <TextInput style={[estilos.input, {borderWidth: errors.email && 1, borderColor: '#f00'}]} onBlur={onBlur} value={value} onChangeText={onChange} />
          ) }
      />
      {errors.email && <Text style={estilos.erro}>{errors.email.message}</Text>}
      <Text style={estilos.text}>Celular*</Text>
      <Controller
          control={control}
          name='cel'
          render={({ field: { onBlur, onChange, value}}) => (
          <TextInputMask style={[estilos.input, {borderWidth: errors.cel && 1, borderColor: '#f00'}]} type={'cel-phone'} options={{maskType: 'BRL', withDDD: true, dddMask: '(99) '}} onBlur={onBlur} value={value} onChangeText={onChange} />
          ) }
      />
      {errors.cel && <Text style={estilos.erro}>{errors.cel.message}</Text>}
      <Text style={estilos.text}>CPF*</Text>
      <Controller
          control={control}
          name='cpf'
          render={({ field: { onBlur, onChange, value}}) => (
          <TextInputMask style={[estilos.input, {borderWidth: errors.cpf && 1, borderColor: '#f00'}]} type={'cpf'} onBlur={onBlur} value={value} onChangeText={onChange} />
          ) }
      />
      {errors.cpf && <Text style={estilos.erro}>{errors.cpf.message}</Text>}
      <Text style={estilos.text}>Senha*</Text>
      <View style={[estilos.inputSenha, {borderWidth: errors.senha && 1, borderColor: '#f00'}]}>
        <Controller
            control={control}
            name='senha'
            render={({ field: { onBlur, onChange, value}}) => (
            <TextInput secureTextEntry={secureText} style={{width: '89%', fontSize: 15}} onBlur={onBlur} value={value} onChangeText={onChange} />
            ) }
          />
        <TouchableOpacity onPress={verSenha}>
          {secureText == true && (
            <Feather name="eye" size={25} color={'#ff3e89'} />
          )}
          {secureText == false && (
            <Feather name="eye-off" size={25} color={'#ff3e89'} />
          )}
        </TouchableOpacity>
      </View>
      {errors.senha && <Text style={estilos.erro}>{errors.senha.message}</Text>}
      <TouchableOpacity style={estilos.button} onPress={handleSubmit(Cadastro)}>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    color: '#cc64a0',
    marginBottom: 20,
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
    borderRadius: 15,
    fontSize: 15,
    marginBottom: 15,
  },
  button: {
    padding: 70,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#93b7b3',
    borderRadius: 100,
    marginTop: 15,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
  inputSenha: {
    flexDirection: 'row',
    width: width - 100,
    alignItems: 'center',
    backgroundColor: '#f3b1c7',
    borderRadius: 15,
    height: '5%',
    paddingLeft: 10,
    marginBottom: 15,
  },
  erro: {
    color: '#f00',
    fontSize: 15,
    marginBottom: 15,
    marginTop: -10
  },
});



	
	