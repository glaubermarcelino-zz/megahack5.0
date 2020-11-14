import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Cartoes = () => {
  return (
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
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.welcome}>Meus Cartões</Text>
          <FeatherIcon style={{margin: 10}} name="plus" size={30} />
        </View>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>teste</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
export default Cartoes;
