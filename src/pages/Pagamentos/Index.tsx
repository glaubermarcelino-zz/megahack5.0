import React from 'react';
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
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Icon} from 'react-native-elements';
import Header from '../../components/Header/Index';

const Pagamentos = () => {
  function handleNavigateBack() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
  }
  function handleNavigate() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
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
        <TouchableOpacity
          onPress={() => handleNavigateBack()}
          style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <Text style={{fontSize: 16, color: '#305F95', fontWeight: 'bold'}}>
            <Icon name="g-translate" color="#00aced" />
            Pagamentos
          </Text>
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
                  <Image source={require('../../assets/icons/dda.png')} />
                </View>
                <Text style={styles.itemTitle}>DDA Boletos</Text>
              </TouchableOpacity>
              <View style={{overflow: 'hidden', paddingBottom: 2}}>
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
                    <Image
                      source={require('../../assets/icons/leitor.png')}
                    />
                  </View>
                  <Text style={styles.itemTitle}>Pagar com Leitor</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
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
                  <Image source={require('../../assets/icons/folhapagamento.png')} />
                </View>
                <Text style={styles.itemTitle}>Folha de Pagamento</Text>
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
                  <Image
                    source={require('../../assets/icons/digitarcodigo.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Digitar Código</Text>
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
  item: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#305F95',
    height: 90,
    width: 147,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
  servicos: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
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

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#305F95',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
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

export default Pagamentos;
