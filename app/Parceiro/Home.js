import React, { useState, useEffect } from  'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { db } from "../../FirebaseConfig";
import { ref, onValue } from "firebase/database";

export default function HomeParceiro({ navigation }) {
  const [image, setImage] = useState('');
  const [nome, setNome] =  useState('');
  const [preco, setPreco] =  useState('');
  const [categoria, setCategoria] = useState('');

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const refer = ref(db, 'produtos/'); //MODIFICAR 

  useEffect(() => {
      onValue(refer, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setImage(data.imageProd);
        setCategoria(data.categoriaProd);
        setNome(data.nomeProd);
        setPreco(data.precoProd);
      }
      });
  })

  const produtos = [
    {
        nomeProduto: nome,
        precoProduto: preco,
        categoriaProduto: categoria,
        imageProduto: image
     }
   ]

  const addProd = () => {
    navigation.navigate('addProd');
  };
  
  const listProdutos = produtos.map(produto => //sem a pasta produto
    <View style={estilos.container}>
      <LinearGradient
        colors={['#fff', '#ddd']}
        style={estilos.background}
        locations={[0.9, 1]}
      />
      <View>
        <View style={estilos.topo}>
          <Text style={estilos.topoTxt}>Olá, Dona Lurdes!</Text>
          <Image
            style={{width: 50, height: 50, borderRadius: 100}}
            source={require('../imgs/profile.png')}
          />
        </View>
        <Text style={estilos.pedidosTxt}>Você possui 0 novos pedidos</Text>
        <View style={[estilos.topo, {marginTop: 0}]}>
          <Text style={estilos.opcaoTxt}>Suspender novos pedidos</Text>
          <Switch
          trackColor={{false: '#dfdfdf', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#830c4f' : '#c33b80'}
          ios_backgroundColor="#dfdfdf"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={estilos.buttonSwitch}
        />
        </View>
      </View>
      <View style={{alignItems: 'flex-start', width: '90%'}}>
        <Text style={{fontSize: 25, marginBottom: 15, color: '#555'}}>Meus Produtos</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-start', width: '95%'}}>
        <Image source={{uri: produto.imageProduto}} style={{width: 160, height: 90, borderRadius: 20}}/>
        <View style={estilos.produtos} key={1}>
            <Text style={estilos.categoria}>{produto.categoriaProduto}</Text>
            <Text style={estilos.nome}>{produto.nomeProduto}</Text>
            <Text style={estilos.valor}>{produto.precoProduto}</Text>
        </View>
      </View>
      <View style={estilos.positionButton}>
        <TouchableOpacity style={estilos.button} onPress={addProd}>
          <Feather name={'plus'} color={'#fff'} size={45} />
        </TouchableOpacity>
      </View>
    </View>
  )

  return listProdutos;
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%',
  },
  button: {
    backgroundColor: '#ff3e89',
    padding: 15,
    borderRadius: '100%',
  },
  positionButton: {
    width: '95%',
    alignItems: 'flex-end',
    marginTop: 15
  },
  produtos: {
    marginLeft: 10,
  },
  categoria: {
    fontSize: 12,
    color: '#8f8e8e',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555'
  },
  valor: {
    fontSize: 20,
    color: '#555'
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '95%'
  },
  topoTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 50,
  },
  pedidosTxt: {
    fontSize: 17,
    color: '#8f8e8e',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  opcaoTxt: {
    fontSize: 15,
    marginRight: 10
  },
});
