import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

const SuporteScreen = ({ navigation }) => {
  // Função para abrir o aplicativo de e-mail
  const enviarEmail = () => {
    const email = 'contato@empresa.com'; // Substitua pelo seu email
    const assunto = 'Suporte ao Usuário'; // Assunto do email
    const body = 'Olá, gostaria de solicitar suporte.'; // Corpo do email
    const url = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;
    
    // Abrir o email usando Linking
    Linking.openURL(url).catch((err) =>
      console.error('Erro ao abrir cliente de email:', err)
    );
  };

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Suporte</Text>
      <Text style={styles.subtitle}>Como podemos te ajudar?</Text>

      {/* Botão Empresa */}
      <TouchableOpacity style={styles.card} onPress={enviarEmail}>
        <Image
          source={require('./imgs/empresa-icon.png')} // Substitua pela sua imagem
          style={styles.icon}
        />
        <View>
          <Text style={styles.cardTitle}>Empresa</Text>
          <Text style={styles.cardSubtitle}>Fale conosco</Text>
        </View>
      </TouchableOpacity>

      {/* Botão Configurações */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Configurações')} // Exemplo de navegação
      >
        <Image
          source={require('./imgs/config-icon.png')} // Substitua pela sua imagem
          style={styles.icon}
        />
        <View>
          <Text style={styles.cardTitle}>Configurações</Text>
          <Text style={styles.cardSubtitle}>Premium, etc.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#6d006d', // Mesma cor que a imagem
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Cor de fundo branco para remover o rosa
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1, // Linha para destacar o card (opcional)
    borderColor: '#ddd', // Cor da borda (opcional)
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6d006d',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6d006d',
  },
});

export default SuporteScreen;
