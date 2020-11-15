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
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header/Index'

const Utilidades = () => {
  function handleNavigateBack() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
  }
  return (
    <>
      <View style={{flex: 1}}>
        <GeneralStatusBarColor
          backgroundColor="#305F95"
          barStyle="light-content"
        />
        <Header titulo={"Olá, Confeitaria Marisa"}/>
      </View>
      <SafeAreaView>
        <TouchableOpacity onPress={handleNavigateBack}>
          <FeatherIcon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <View style={{overflow: 'hidden', paddingBottom: 5}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 300,
                  height: 60,
                  shadowColor: '#000',
                  shadowOffset: {width: 1, height: 1},
                  shadowOpacity: 0.4,
                  shadowRadius: 3,
                  elevation: 5,
                }}
              />
            </View>
            <View style={{overflow: 'hidden', paddingBottom: 5}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 300,
                  height: 60,
                  shadowColor: '#000',
                  shadowOffset: {width: 1, height: 1},
                  shadowOpacity: 0.4,
                  shadowRadius: 3,
                  elevation: 5,
                }}
              />
            </View>
            <View style={{overflow: 'hidden', paddingBottom: 5}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 300,
                  height: 60,
                  shadowColor: '#000',
                  shadowOffset: {width: 1, height: 1},
                  shadowOpacity: 0.4,
                  shadowRadius: 3,
                  elevation: 5,
                }}
              />
            </View>
            <View style={{overflow: 'hidden', paddingBottom: 5}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 300,
                  height: 60,
                  shadowColor: '#000',
                  shadowOffset: {width: 1, height: 1},
                  shadowOpacity: 0.4,
                  shadowRadius: 3,
                  elevation: 5,
                }}
              />
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

export default Utilidades;
