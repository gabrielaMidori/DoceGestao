import {
    ImageBackground,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
  } from 'react-native';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import { Feather } from '@expo/vector-icons';
  
  export default function Apresentacao2({ navigation }) {
    const Inicio = () => {
      navigation.navigate('Inicio');
    };
    return (
      <ImageBackground
        source={require('./imgs/fundo2.png')}
        style={estilos.fundo}>
        <View style={estilos.positionText}>
          <Text style={estilos.text}>
            Encontre doces facilmente com nossa ajuda!
          </Text>
        </View>
  
        <View style={estilos.icons}>
          <MaterialCommunityIcons
            name={'circle'}
            style={{ marginRight: 10 }}
            color={'#ccc'}
            size={20}
          />
          <MaterialCommunityIcons name={'circle'} color={'#fff'} size={20} />
        </View>
        <View style={estilos.positionButton}>
          <TouchableOpacity style={estilos.button} onPress={Inicio}>
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
      fontSize: 40,
      marginLeft: '5%',
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
    positionText: {
      alignItems: 'flex-start',
      width: '100%',
    },
  });
  