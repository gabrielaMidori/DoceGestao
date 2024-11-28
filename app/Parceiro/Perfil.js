import React, { useContext, useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Switch, 
  TouchableOpacity, 
  Image, 
  ScrollView 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Hook de navegação

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null); // Imagem de perfil
  const navigation = useNavigation(); // Navegação

  // Carregar imagem de perfil do cache local
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
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permissão Negada: precisamos de acesso à galeria para alterar a foto.');
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
    <ScrollView contentContainerStyle={[styles.container]}>
      {/* Cabeçalho com imagem de perfil */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={
              profileImage
                ? { uri: profileImage }
                : require('../imgs/profile.png') // Imagem padrão
            }
          />
          <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
            <Image
              source={require('../imgs/pencil-icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.nameText]}>Doces da Lurdes</Text>
        <Text style={[styles.emailText]}>doceslurdes@gmail.com</Text>
      </View>

      {/* Seção de Configurações */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle]}>Configurações</Text>

        {/* Alternar modo (Baunilha ou Chocolate) */}
        <View style={styles.item}>
          <Image
            source={require('../imgs/new-peidinho2.png')} // Ícone personalizável
            style={styles.iconSmall}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.itemText]}>Modo</Text>
            <Text style={styles.subText}>Baunilha ou Chocolate</Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: '#767577' }}
            thumbColor={'#a7006d'}
          />
        </View>

        {/* Alteração de senha */}
        <TouchableOpacity 
          style={styles.item} 
          onPress={() => navigation.navigate('AlterarSenha')}
        >
          <Image
            source={require('../imgs/amordaminhavida.png')}
            style={styles.iconSmall}
          />
          <Text style={[styles.itemText]}> ‎ Alteração de Senha</Text>
        </TouchableOpacity>

        {/* Alterar informações */}
        <TouchableOpacity 
          style={styles.item} 
          onPress={() => navigation.navigate('AlterarInformacoes')}
        >
          <Image
            source={require('../imgs/icon.png')}
            style={styles.iconSmall}
          />
          <Text style={[styles.itemText]}> ‎ Alterar Informações</Text>
        </TouchableOpacity>
      </View>

      {/* Seção de Informações */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle]}>Informações</Text>

        {/* Termos de Serviço */}
        <TouchableOpacity style={styles.infoItem}>
          
          <Text style={[styles.itemText]}>Termos de Serviço</Text>
        </TouchableOpacity>

        {/* Suporte */}
        <TouchableOpacity 
          style={styles.infoItem} 
          onPress={() => navigation.navigate('Suporte')}
        >
          <Image
            source={require('../imgs/escudo.png')}
            style={styles.iconSmall}
          />
          <Text style={[styles.itemText]}> ‎ Suporte</Text>
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
  container: { flexGrow: 1, padding: 20 },
  header: { alignItems: 'center', marginVertical: 20 },
  profileImageContainer: { position: 'relative' },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  editIcon: { 
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
    backgroundColor: '#fff', 
    borderRadius: 15, 
    padding: 4 
  },
  icon: { width: 20, height: 20 },
  nameText: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  emailText: { fontSize: 16, color: '#888' },
  section: { marginTop: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  item: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd' 
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
    borderBottomColor: '#ddd' 
  },
});

export default ProfileScreen;
