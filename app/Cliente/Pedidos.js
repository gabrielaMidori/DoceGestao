import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PedidosCliente() {
  return (
    <View style={estilos.container}>
      <LinearGradient
        colors={['#fff', '#ddd']}
        style={estilos.background}
        locations={[0.9, 1]}
      />
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
});
