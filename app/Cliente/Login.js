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
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../FirebaseConfig';

const { width } = Dimensions.get('screen');

export default function LoginCliente({ navigation }) {
  const [secureText, setSecureText] = useState(true);

  function verSenha() {
    setSecureText(!secureText);
  }
  const Inicio = () => {
    navigation.navigate('Inicio');
  };

  //Validações para logar
  const schema = yup.object({
    email: yup.string().email("Email inválido").required("Informe seu email"),
    senha: yup.string().min(8, "A senha deve ter pelo menos 8 dígitos").required("Informe sua senha")
  })
  const { control, handleSubmit, formState: { errors }, getValues } = useForm({
    resolver: yupResolver(schema)
  })

  function Login() {
    const auth = getAuth(app);

    const email = getValues('email');
    const senha = getValues('senha');

    signInWithEmailAndPassword(auth, email, senha)
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
      <Text style={estilos.title}>Login</Text>
      <Text style={estilos.subtitle}>Seja bem-vindo(a) de volta!</Text>
      <Text style={estilos.text}>Email</Text>
      <Controller
          control={control}
          name='email'
          render={({ field: { onBlur, onChange, value}}) => (
          <TextInput style={[estilos.input, {borderWidth: errors.email && 1, borderColor: '#f00'}]} onBlur={onBlur} value={value} onChangeText={onChange} />
          ) }
      />
      {errors.email && <Text style={estilos.erro}>{errors.email.message}</Text>}
      <Text style={estilos.text}>Senha</Text>
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

      <TouchableOpacity style={estilos.button} onPress={handleSubmit(Login)}>
        <Text style={estilos.textButton}>Entrar</Text>
      </TouchableOpacity>
      <Text style={estilos.esqueceuSenha}>Esqueceu a senha?</Text>
      <View style={estilos.space}></View>
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
    marginBottom: 30,
  },
  title: {
    fontSize: 35,
    color: '#cc64a0',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#cc64a0',
    marginBottom: 50,
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
    marginBottom: 20,
    borderRadius: 15,
    fontSize: 15,
  },
  button: {
    padding: 70,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#93b7b3',
    borderRadius: 100,
    marginTop: 25,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
  esqueceuSenha: {
    fontSize: 15,
    marginTop: 25,
    fontWeight: 'bold',
    color: '#cc64a0',
  },
  space: {
    height: '20%',
  },
  inputSenha: {
    flexDirection: 'row',
    width: width - 100,
    alignItems: 'center',
    backgroundColor: '#f3b1c7',
    borderRadius: 15,
    height: '5%',
    paddingLeft: 10,
    marginBottom: 15
  },
  erro: {
    color: '#f00',
    fontSize: 15,
    marginBottom: 15,
    marginTop: -10
  },
});
