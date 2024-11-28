import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { db } from "../../FirebaseConfig";
import { ref, onValue } from "firebase/database";
import { useNavigation } from 'expo-router';

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export default function HomeCliente({route}) {
  const [image, setImage] = useState('');
  const [nome, setNome] =  useState('');
  const [preco, setPreco] =  useState('');
  const [categoria, setCategoria] = useState('');
  const [desc, setDesc] = useState('');

  //Recuperar dados do banco de dados
  const refer = ref(db, 'produtos/'); //MODIFICAR 

  useEffect(() => {
      onValue(refer, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setImage(data.imageProd);
        setCategoria(data.categoriaProd);
        setNome(data.nomeProd);
        setPreco(data.precoProd);
        setDesc(data.descProd)
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
   const navigation = useNavigation();
   const infoProd = () => {
      
      navigation.navigate('InfoProd', {nomeProduto: nome, descProduto: desc, imageProduto: image, precoProduto: preco, moedasDigitais: quantMoedas});
   }

   var quantMoedas = 10;

   const listProdutos = produtos.map(produto => //sem a pasta produto
    <View style={styles.backgroundView}>
      <LinearGradient
              colors={['#fff', '#ddd']}
              style={estilos.background}
              locations={[0.9, 1]}
            />
      <View style={styles.mainView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 125,
          }}>
          <View style={styles.local}>
            <View style={styles.localIcon}>
              <MaterialCommunityIcons
                name={'map-marker-radius'}
                color={'#c13b34'}
                size={20}
              />
            </View>
            <View>
              <Text style={styles.localText}>Localização</Text>
              <Text style={styles.localTextCliente}>
                Praça Miguel Ortega, 135 
              </Text>
            </View>
            <View style={styles.icon}>
              <Feather name={'chevron-down'} size={20} />
            </View>
          </View>
          <Image source={require('../imgs/DoceMoeda.png')} style={{width: 30, height: 30, marginRight: 5}}/>
          <Text style={{color: '#555', fontSize: 15, fontWeight: 'bold'}}>{route.params?.moedasDigitais}</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../imgs/bolo.png')}
            style={{
              width: 350,
              height: 200,
              borderRadius: 20,
              marginTop: 25,
              marginBottom: 10,
            }}
          />
        </View>
        <View style={styles.opcoes}>
          <View style={styles.opcao}>
            <View style={styles.opcaoIcon}>
              <MaterialCommunityIcons
                name={'cake-variant'}
                color={'#f1a2bd'}
                size={45}
              />
            </View>
            <Text style={styles.opcaoText}>Doces</Text>
          </View>
          <View style={styles.opcao}>
            <View style={styles.opcaoIcon}>
              <MaterialCommunityIcons
                name={'cupcake'}
                color={'#f1a2bd'}
                size={45}
              />
            </View>
            <Text style={styles.opcaoText}>Sobremesas</Text>
          </View>
          <View style={styles.opcao}>
            <View style={styles.opcaoIcon}>
              <MaterialCommunityIcons
                name={'view-grid'}
                color={'#f1a2bd'}
                size={45}
              />
            </View>
            <Text style={styles.opcaoText}>Encomendas</Text>
          </View>
          <View style={styles.opcao}>
            <View style={styles.opcaoIcon}>
              <MaterialCommunityIcons
                name={'sale'}
                color={'#f1a2bd'}
                size={45}
              />
            </View>
            <Text style={styles.opcaoText}>Descontos</Text>
          </View>
        </View>
        <ScrollView>
          <View style={[styles.favoritos, { marginTop: 30 }]}>
            
          </View>
          <View style={styles.produtos}> 
              <View>
              <TouchableOpacity onPress={infoProd}>
                {image !== '' && <Image style={styles.imgProdutos} source={{uri: produto.imageProduto}}/>}
                {categoria !== '' && <Text style={styles.categoria}>{produto.categoriaProduto}</Text>}
                {nome !== '' && <Text style={styles.nome}>{produto.nomeProduto}</Text>}
                {preco !== '' && <Text style={styles.preco}>{produto.precoProduto}</Text>}
              </TouchableOpacity>
              </View>
          </View>
          <View style={[styles.favoritos, { marginTop: 10 }]}>
          </View>
        </ScrollView>
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
});



const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
  },
  mainView: {
    justifyContent: 'start',
    alignItems: 'center',
    maxHeight: height,
    minHeight: height,
    width: width,
  },
  //Localização
  local: {
    flexDirection: 'row',
    marginRight: 70,
  },
  localIcon: {
    backgroundColor: '#fdd3dd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 100,
    marginRight: 7,
  },
  localText: {
    fontSize: 12,
    color: '#707070',
  },

  localTextCliente: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 25,
    marginTop: 13,
  },

  //Opções
  opcoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  opcaoIcon: {
    backgroundColor: '#fdd3dd',
    padding: 15,
    margin: 10,
    borderRadius: 12,
  },
  opcao: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  opcaoText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  //Favoritos
  favoritos: {
    flexDirection: 'row',
    justifyContent: 'start',
  },
  titleFav: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#83c0b6',
    marginRight: 5,
    marginLeft: 15,
  },
  imgProdutos: {
    width: 170,
    height: 110,
    borderRadius: 15,
    margin: 10,
  },
  produtos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  categoria: {
    fontSize: 11,
    color: '#707070',
    marginLeft: 15,
  },
  nome: {
    fontWeight: 'bold',
    marginLeft: 15,
  },
  preco: {
    fontWeight: 'bold',
    marginLeft: 100,
    marginTop: 5,
  },
  //Próximo de você
  titleProx: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
    marginLeft: 15,
  },
});