import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Cadastro from './pages/Cadastro/Cadastro';
import Cartoes from './pages/Cartoes/Index';
import Ativacao from './pages/Ativacao/Index';
import Sucesso from './pages/Sucesso/Index';
// import Configuracoes from './pages/Home/Home';
// import Investimentos from './pages/Home/Home';
// import Notificacoes from './pages/Home/Home';
// import Vantages from './pages/Home/Home';
// import Utilidades from './pages/Home/Home';
// import Pagamentos from './pages/Home/Home';
// import Perfil from './pages/Home/Home';
// import Credito from './pages/Home/Home';
// import CapitalGiro from './pages/Home/Home';
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
        {/* <AppStack.Screen name="Configuracoes" component={Configuracoes} />
        <AppStack.Screen name="Investimentos" component={Investimentos} />
        <AppStack.Screen name="Notificacoes" component={Notificacoes} />
        <AppStack.Screen name="Vantages" component={Vantages} />
        <AppStack.Screen name="Utilidades" component={Utilidades} />
        <AppStack.Screen name="Pagamentos" component={Pagamentos} />
        <AppStack.Screen name="Perfil" component={Perfil} />
        <AppStack.Screen name="Credito" component={Credito} />
        <AppStack.Screen name="CapitalGiro" component={CapitalGiro} />*/}
        <AppStack.Screen name="FundoReserva" component={FundoReserva} /> 
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
