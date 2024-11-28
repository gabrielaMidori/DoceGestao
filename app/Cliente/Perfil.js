import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({navigation}) {
  const [profileImage, setProfileImage] = useState(null);

  // Carregar imagem de perfil do cache
  useEffect(() => {
    const loadProfileImage = async () => {
      try {
        const cachedImage = await AsyncStorage.getItem('profileImage');
        if (cachedImage) setProfileImage(cachedImage);
      } catch (error) {
        console.error('Erro ao carregar imagem do cache:', error);
      }
    };
    loadProfileImage();
  }, []);

  // Selecionar nova imagem de perfil
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        'Permissão Negada',
        'Precisamos de acesso à galeria para alterar a foto.'
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImage = result.assets[0].uri;
      setProfileImage(selectedImage);
      try {
        await AsyncStorage.setItem('profileImage', selectedImage);
      } catch (error) {
        console.error('Erro ao salvar imagem no cache:', error);
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container
      ]}>
      {/* Cabeçalho com a foto e dados do usuário */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={
              profileImage
                ? { uri: profileImage }
                : require('../imgs/profile.png')
            }
          />
          <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
            <Image
              source={require('../imgs/pencil-icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.nameText]}>
          Gabriela Midori
        </Text>
        <Text style={[styles.emailText]}>
          gabi.midori.costa@gmail.com
        </Text>
      </View>

      {/* Seção de Configurações */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle]}>
          Configurações
        </Text>

        {/* Modo com legenda */}
        <View style={styles.item}>
          <Image
            source={require('../imgs/new-peidinho2.png')}
            style={styles.iconSmall}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.itemText]}>Modo</Text>
            <Text style={styles.subText}>Baunilha ou Chocolate</Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: '#767577' }}
            thumbColor={'#a7006d'} // Rosa fixo
          />
        </View>

        {/* Alteração de senha */}
        <TouchableOpacity style={styles.item}>
          <Image
            source={require('../imgs/amordaminhavida.png')}
            style={styles.iconSmall}
          />
          <Text style={[styles.itemText]}>
            ‎ Alteração de Senha
          </Text>
        </TouchableOpacity>

        {/* Alterar Informações */}
        <TouchableOpacity style={styles.item}>
          <Image
            source={require('../imgs/icon.png')}
            style={styles.iconSmall}
          />
          <Text style={[styles.itemText]}>
            ‎ Alterar Informações
          </Text>
        </TouchableOpacity>
      </View>

      {/* Seção de Informações */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle]}>
          Informações
        </Text>

        {/* Botão para navegar para a tela Suporte */}
        <TouchableOpacity
          style={styles.infoItem}
          onPress={() => navigation.navigate('Suporte')} // Função para navegar
        >
          <Image
            source={require('../imgs/escudo.png')}
            style={styles.iconSmall}
          />
          <Text style={[styles.itemText]}>
            Informações e Suporte ao Usuário
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.infoItem} 
          onPress={() => navigation.navigate('Inicio')}
        >
          <Text style={[styles.itemText]}> ‎ Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { alignItems: 'center', marginVertical: 20 },
  profileImageContainer: { position: 'relative' },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 4,
  },
  icon: { width: 20, height: 20 },
  nameText: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  emailText: { fontSize: 16, color: '#888' },
  section: { marginTop: 20, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  textContainer: { flex: 1, marginLeft: 10 },
  itemText: { fontSize: 16 },
  subText: { fontSize: 12, color: '#888' },
  iconSmall: { width: 24, height: 24 },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});


