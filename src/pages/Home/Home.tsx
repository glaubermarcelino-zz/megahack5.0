import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
// import { SvgUri } from "react-native-svg";
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header/Index';

const Home = () => {
  const [selectedItems, setselectedItems] = useState<number[]>([]);
  const navigation = useNavigation();

  function handleNavigateBack() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
  }
  function handleNavigate() {
    Alert.alert('Oooops...', 'Funcionalidade de Navegação acionada');
  }

  return (
    <>
      <View>
        <GeneralStatusBarColor
          backgroundColor="#305F95"
          barStyle="light-content"
        />
        <Header titulo={'Olá, Confeitaria Marisa'} />
      </View>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.servicos}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <TouchableOpacity
                style={[styles.itemSaldoDisponivel]}
                // onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/icons/visibility_off_24px_outlined.png')}
                  />
                </View>
                <Text style={styles.itemTitleSaldoCashBack}>
                  Saldo Disponível
                </Text>
                <Text
                  style={[styles.itemTitleSaldoCashBack, {color: '#B5D3AA'}]}>
                  R$ 250.000,00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.itemExtrato]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/icons/extrato_grafos.png')}
                  />
                </View>
                <Text style={styles.itemTitleSecond}>Extrato</Text>
                {/* <View>
                  <Image source={require('')}/>
                  <View>
                    <Text style={{fontSize:7}}>Receita * nov</Text>
                    <Text style={{fontSize:7}}>R$ 40.000,00</Text>
                    <Text style={{fontSize:7}}>Despesa * nov</Text>
                    <Text style={{fontSize:7}}>R$ 45.000,00</Text>
                  </View>
                </View> */}
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/pix.png')} />
                </View>
                <Text style={styles.itemTitle}>Pix</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate("Pagamentos")}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/pagarconta.png')} />
                </View>
                <Text style={styles.itemTitle}>Pagar Conta</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/depositar.png')} />
                </View>
                <Text style={styles.itemTitle}>Depositar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate("Credito")}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/credito_digital.png')} />
                </View>
                <Text style={styles.itemTitle}>Credito Digital</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
               <TouchableOpacity
                style={[styles.itemCashBack]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/visibility_off_24px_outlined.png')} />
                </View>
                <Text style={styles.itemTitleSaldoCashBack}>Cash Back</Text>
                <Text
                  style={[styles.itemTitleSaldoCashBack, {color: '#B5D3AA'}]}>
                  R$ 5.000,00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.itemFundoReserva]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/folhapagamento.png')} />
                </View>
                <Text style={styles.itemTitleSecond}>Fundo de Reserva</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/transferencia.png')} />
                </View>
                <Text style={styles.itemTitle}>Transferência</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/cobranca.png')} />
                </View>
                <Text style={styles.itemTitle}>Cobrança</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/comprovantes.png')} />
                </View>
                <Text style={styles.itemTitle}>Comprovantes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate("Utilidades")}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/utilidades.png')} />
                </View>
                <Text style={styles.itemTitle}>Utilidades</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  servicos: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
  },
  welcome: {color: '#305F95', fontSize: 16, margin: 10, fontWeight: 'bold'},
  instructions: {},
  logo: {
    justifyContent: 'flex-end',
    width: 94,
    height: 40,
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#305F95',
    height: 90,
    width: 147,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },
  itemSaldoDisponivel: {
    backgroundColor: '#305F95',
    borderWidth: 1,
    borderColor: '#305F95',
    height: 90,
    width: 147,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },
  itemExtrato: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#305F95',
    height: 90,
    width: 147,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },
  itemFundoReserva: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#305F95',
    height: 90,
    width: 147,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },
  itemCashBack: {
    backgroundColor: '#FE6C6D',
    borderWidth: 1,
    borderColor: '#FE6C6D',
    height: 90,
    width: 147,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#305F95',
  },
  itemTitleSaldoCashBack: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  itemTitleSecond: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#979797',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;
