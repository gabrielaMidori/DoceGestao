import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';


export default function DetalhesPedido({route}) {
  const [quantidade, setQuantidade] = useState(1);

  const handleQuantidade = (tipo) => {
    if (tipo === 'incrementar') {
      setQuantidade(quantidade + 1);
    } else if (tipo === 'diminuir' && quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const navigation = useNavigation();

  const Home = () => {
    navigation.navigate('MenuCliente', {screen: 'HomeCliente'})
  }

  const preco = route.params?.precoProduto;

  const precoFinal = (quantidade * parseInt(preco.replace('R$ ', ''))).toFixed(2);

  const valorReal = route.params?.moedasDigitais * 5;

  function Pagamento() {
    const posPagamento = valorReal - precoFinal;
    const moedasPosPag = posPagamento/5;

    navigation.navigate('Pagamento', {moedasDigitais: moedasPosPag, precoProduto: precoFinal, nomeProduto: route.params?.nomeProduto, imageProduto: route.params?.imageProduto})
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.positionIcon}>
        <Feather
          name={'chevron-left'}
          color={'#aaa'}
          size={45}
          onPress={Home}
        />
      </View>
      <Image
        source={{ uri: route.params?.imageProduto }}
        style={styles.image}
      />
      <Text style={styles.title}>{route.params?.nomeProduto}</Text>
      <Text style={styles.description}>
        {route.params?.descProduto}
      </Text>
      <Text style={styles.sectionTitle}>Quantidade</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantidade('diminuir')}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantidade}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantidade('incrementar')}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Preço</Text>
      <Text style={[styles.sectionTitle, {marginTop: -3, fontWeight: 'normal', marginLeft: 10}]}>R$ {precoFinal}</Text>
      <TouchableOpacity style={styles.orderButton} onPress={Pagamento}>
        <Text style={styles.orderButtonText}>
          Realizar Pedido
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  positionIcon: {
    width: '100%',
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    marginBottom: 16,
    marginTop: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555'
  },
  description: {
    fontSize: 17,
    color: '#555',
    marginBottom: 16,
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  storeImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deliveryTime: {
    fontSize: 12,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#555'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdd3dd',
    borderRadius: 100,
    marginHorizontal: 8,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f1a2bd'
  },
  quantityText: {
    fontSize: 20,
    color: '#555'
  },
  orderButton: {
    backgroundColor: '#83c0b6',
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 25,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

