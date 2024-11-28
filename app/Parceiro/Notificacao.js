import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('screen');

export default function NotificacaoParceiro() {
  return (
    <View style={estilos.container}>
      <LinearGradient
        colors={['#fff', '#ddd']}
        style={estilos.background}
        locations={[0.9, 1]}
      />
      <View style={estilos.positionIcon}>
        <Feather name={'chevron-left'} color={'#aaa'} size={50} />
      </View>
      <Text style={estilos.title}>Notificações</Text>
      <View style={estilos.notificacoes}>
        <View style={estilos.notificacao}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            color={'#555'}
            size={40}
            style={estilos.icon}
          />
          <View>
            <Text style={estilos.titleMensag}>Título da mensagem</Text>
            <Text style={estilos.mensag}>Corpo da mensagem</Text>
          </View>
        </View>
      </View>
    </View>
  );
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
  positionIcon: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 0,
  },
  title: {
    fontSize: 35,
    color: '#cc64a0',
    marginBottom: 20,
  },
  notificacoes: {
    height: '70%',
  },
  notificacao: {
    backgroundColor: '#f3b1c7',
    paddingTop: 25,
    paddingBottom: 25,
    width: width,
    borderWeight: 2,
    borderColor: '#aaa',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleMensag: {
    fontSize: 20,
    color: '#555',
    marginLeft: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mensag: {
    color: '#555',
    fontSize: 15,
    marginLeft: 15,
  },
  icon: {
    marginLeft: 10,
  },
});
