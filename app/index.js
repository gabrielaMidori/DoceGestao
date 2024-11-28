import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Apresentacao1 from './Apresentacao1';
import Apresentacao2 from './Apresentacao2';
import Inicio from './Inicio';
import LoginCliente from './Cliente/Login';
import CadastroCliente from './Cliente/Cadastro';
import AcessoParceiro from './AcessoParceiro';
import LoginParceiro from './Parceiro/Login';
import EscolherCadastro from './Parceiro/EscolherCadastro';
import Cadastro1 from './Parceiro/Cadastro1';
import Cadastro2 from './Parceiro/Cadastro2';
import HomeParceiro from './Parceiro/Home';
import NotificacaoParceiro from './Parceiro/Notificacao';
import Gerenciamento from './Parceiro/Gerenciamento';
import PerfilParceiro from './Parceiro/Perfil';
import addProd from './Parceiro/addProd';
import HomeCliente from './Cliente/Home';
import PedidosCliente from './Cliente/Pedidos';
import NotificacaoCliente from './Cliente/Notificacao';
import PerfilCliente from './Cliente/Perfil';
import Suporte from './Suporte';
import InfoProd from  './Cliente/infoProd';

function MenuCliente() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        title: '',
        tabBarActiveTintColor: '#f1a2bd',
        tabBarInactiveTintColor: '#83c0b6',
        tabBarStyle: {
          paddingTop: 15,
          height: 100,
        },
      }}>
      <Tab.Screen
        name="HomeCliente"
        component={HomeCliente}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="PedidosCliente"
        component={PedidosCliente}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificacaoCliente"
        component={NotificacaoCliente}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="bell" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="PerfilCliente"
        component={PerfilCliente}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MenuParceiro() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        title: '',
        tabBarActiveTintColor: '#f1a2bd',
        tabBarInactiveTintColor: '#83c0b6',
        tabBarStyle: {
          paddingTop: 15,
          height: 100,
        },
      }}>
      <Tab.Screen
        name="HomeParceiro"
        component={HomeParceiro}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificacaoParceiro"
        component={NotificacaoParceiro}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="bell" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Gerenciamento"
        component={Gerenciamento}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-grid" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="PerfilParceiro"
        component={PerfilParceiro}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Index() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Apresentacao1" component={Apresentacao1} />
        <Stack.Screen name="Apresentacao2" component={Apresentacao2} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="LoginCliente" component={LoginCliente} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        <Stack.Screen name="AcessoParceiro" component={AcessoParceiro} />
        <Stack.Screen name="LoginParceiro" component={LoginParceiro} />
        <Stack.Screen name="EscolherCadastro" component={EscolherCadastro} />
        <Stack.Screen name="Cadastro1" component={Cadastro1} />
        <Stack.Screen name="Cadastro2" component={Cadastro2} />
        <Stack.Screen name="MenuParceiro" component={MenuParceiro} />
        <Stack.Screen name="MenuCliente" component={MenuCliente} />
        <Stack.Screen name="addProd" component={addProd} />
        <Stack.Screen name="Suporte" component={Suporte} />
        <Stack.Screen name="InfoProd" component={InfoProd} />
      </Stack.Navigator>
  );
}
