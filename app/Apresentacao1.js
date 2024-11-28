import {
    ImageBackground,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
  } from 'react-native';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import { Feather } from '@expo/vector-icons';
  
  export default function Apresentacao1({ navigation }) {
    const Apresentacao2 = () => {
      navigation.navigate('Apresentacao2');
    };
  
    return (
      <ImageBackground
        source={require('./imgs/fundo1.png')}
        style={estilos.fundo}>
        <View style={estilos.positionText}>
          <Text style={estilos.text}>
            Encomende bolos incríveis de todos os sabores!
          </Text>
        </View>
        <View style={estilos.icons}>
          <MaterialCommunityIcons
            name={'circle'}
            style={{ marginRight: 10 }}
            color={'#fff'}
            size={20}
          />
          <MaterialCommunityIcons name={'circle'} color={'#ccc'} size={20} />
        </View>
        <View style={estilos.positionButton}>
          <TouchableOpacity style={estilos.button} onPress={Apresentacao2}>
            <Feather name={'chevron-right'} color={'#fff'} size={45} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
  
  const estilos = StyleSheet.create({
    fundo: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 35,
      marginLeft: '5%',
      marginRight: '5%',
    },
    icons: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'flex-start',
      marginLeft: '10%',
      marginTop: 10,
      marginBottom: 10,
    },
    button: {
      borderRadius: '100%',
      padding: 10,
      backgroundColor: '#fbb5bf',
    },
    positionButton: {
      width: '100%',
      alignItems: 'flex-end',
      marginRight: '10%',
      marginBottom: '10%',
    },
  });
  