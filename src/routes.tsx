import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Cadastro from './pages/Cadastro/Cadastro';
import Cartoes from './pages/Cartoes/Cartoes';
import Ativacao from './pages/Ativacao/Index';
import Sucesso from './pages/Sucesso/Index';
import Investimentos from './pages/Inventimentos/Index';
import Notificacoes from './pages/Notificacoes/Index';
import Vantagens from './pages/Vantagens/Index';
import Utilidades from './pages/Utilidades/Index';
import Pagamentos from './pages/Pagamentos/Index';
import Perfil from './pages/Configuracoes/Index';
import Credito from './pages/Credito/Index';
import CapitalGiro from './pages/CapitalGiro/Index';
import FundoReserva from './pages/FundoReserva/Index';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Cadastro" component={Cadastro} />
        <AppStack.Screen name="Cartoes" component={Cartoes} />
        <AppStack.Screen name="Ativacao" component={Ativacao} />
        <AppStack.Screen name="Sucesso" component={Sucesso} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Investimentos" component={Investimentos} />
        <AppStack.Screen name="Notificacoes" component={Notificacoes} />
        <AppStack.Screen name="Vantagens" component={Vantagens} />
        <AppStack.Screen name="Utilidades" component={Utilidades} />
        <AppStack.Screen name="Pagamentos" component={Pagamentos} />
        <AppStack.Screen name="Perfil" component={Perfil} />
        <AppStack.Screen name="Credito" component={Credito} />
        <AppStack.Screen name="CapitalGiro" component={CapitalGiro} />
        <AppStack.Screen name="FundoReserva" component={FundoReserva} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
