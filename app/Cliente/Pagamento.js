import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

export default function Pagamento({route}){

    const navigation = useNavigation();
        const Home = () => {
        navigation.navigate('MenuCliente', {screen: 'HomeCliente', moedasDigitais: route.params?.moedasDigitais})
        Alert.alert('Compra efetuada!', 'OBS: Você comprou um produto utilizando Doces Moedas, agora você tem ' + route.params?.moedasDigitais + ' Doces Moedas.')
      }
      
  return (
   <View style={styles.container}>
      <View style={styles.positionIcon}>
        <Feather
          name={'chevron-left'}
          size={45}
          color={'#aaa'}
          onPress={Home}
        />
      <Text style={styles.title}>Métodos de Pagamento</Text>
      </View>

      <View style={styles.itemContainer}>
        <Image
          style={styles.itemImage}
          source={{ uri: route.params?.imageProduto }}
        />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{route.params?.nomeProduto}</Text>
        </View>
      </View>

      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.optionBox}>
        <Feather name={'credit-card'} color={'#fff'} size={45}/>

          <Text style={styles.optionText}>Débito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox}>
          <Feather name={'credit-card'} color={'#fff'} size={45}/>
          <Text style={styles.optionText}>Crédito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox}>
          <Image
          style={styles.itemImage}
          source={require('../imgs/pix.png')}
        />
          <Text style={styles.optionText}>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox}>
        <Feather name={'dollar-sign'} color={'#fff'} size={45}/>

          <Text style={styles.optionText}>Dinheiro</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Cashback: <Text style={styles.summaryValue}>R$ 5,00 em Doces Moedas</Text>
        </Text>
        <Text style={[styles.summaryText, styles.total]}>
          Total: <Text style={styles.summaryValue}>R$ {route.params?.precoProduto}</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.finalizeButton} onPress={Home}>
        <Text style={styles.finalizeButtonText}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  positionIcon: {
    width: '100%',
    alignItems: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  backText: {
    fontSize: 18,
    color: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#555'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginLeft: 5
  },
  itemTextContainer: {
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#555'
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  paymentOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionBox: {
    backgroundColor: '#fdd3dd',
    borderRadius: 20,
    width: '45%',
    padding: 30, 
    alignItems: 'center',
    marginBottom: 10,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#AD005A',
    borderRadius: 20,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10
  },
  summaryContainer: {
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
    color: '#555'
  },
  summaryValue: {
    fontWeight: 'bold',
  },
  total: {
    fontSize: 18,
    marginTop: 10,
  },
  finalizeButton: {
    backgroundColor: '#83c0b6',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  finalizeButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
  },
  footerIcon: {
    fontSize: 24,
  },
});

