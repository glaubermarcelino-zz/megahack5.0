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
// import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Home = () => {
  const [selectedItems, setselectedItems] = useState<number[]>([]);
  // const navigation = useNavigation();

  function handleNavigateBack() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
  }
  function handleNavigate() {
    Alert.alert('Oooops...', 'Funcionalidade de Navegação acionada');
  }

  return (
    <>
      <View style={{flex: 1}}>
        <GeneralStatusBarColor
          backgroundColor="#305F95"
          barStyle="light-content"
        />
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: '#305F95',
              height: 60,
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
              padding: 5,
              flexDirection: 'row',
            }}>
            <Text style={{color: '#fff', fontSize: 16}}>
              Olá, Confeitaria Marisa
            </Text>
            <Image
              style={styles.logo}
              source={require('../../assets/images/linker-plus94x40.png')}
            />
          </View>
          <View style={{backgroundColor: '#FE6C6D', height: 9}} />
        </View>
      </View>
      <SafeAreaView>
        <TouchableOpacity onPress={handleNavigateBack}>
          <FeatherIcon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>
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
                style={styles.itemSaldoDisponivel}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <Text style={styles.itemTitleSaldoCashBack}>
                  Saldo Disponível
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.itemExtrato /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
                <Text style={styles.itemTitleSecond}>Extrato</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.item /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
                <Text style={styles.itemTitle}>Pix</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.item /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
                <Text style={styles.itemTitle}>Pagar Conta</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.item /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
                <Text style={styles.itemTitle}>Depositar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.item /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
                <Text style={styles.itemTitle}>Crédito Digital</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <TouchableOpacity
                style={[
                  styles.itemCashBack /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
                <Text style={styles.itemTitleSaldoCashBack}>Cash Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.itemFundoReserva /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
                <Text style={styles.itemTitleSecond}>Fundo de Reserva</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.item /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
                <Text style={styles.itemTitle}>Transferência</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.item /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
                <Text style={styles.itemTitle}>Cobrança</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.item /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
                <Text style={styles.itemTitle}>Comprovantes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.item /*,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},*/,
                ]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                {/* <SvgUri width={42} height={42} uri={item.image_url}></SvgUri> */}
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
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
