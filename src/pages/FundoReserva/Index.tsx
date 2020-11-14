import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  Linking,
  TouchableOpacity,
} from 'react-native';

const FundoReserva: React.FC = (props: any) => {
  //Oculta a barra de status
  StatusBar.setHidden(true);
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: '#5F628C',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 30,
          }}>
          Abra sua conta
        </Text>
        <View>
          <Text
            style={{
              color: '#FE6C6D',
              fontSize: 20,
              letterSpacing: 2,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Código de Verificação
          </Text>
          <Text
            style={{
              color: '#63628B',
              fontSize: 15,
              letterSpacing: 2,
              textAlign: 'center',
            }}>
            Foi enviado um código de verificação
          </Text>
          <Text
            style={{
              color: '#63628B',
              fontSize: 15,
              letterSpacing: 2,
              textAlign: 'center',
            }}>
            para (21) 7070-7070
          </Text>
        </View>
        <Text
          style={{
            color: '#092058',
            fontSize: 35,
            letterSpacing: 2,
            textAlign: 'center',
          }}></Text>
        <View style={styles.content}>
          <View>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {}}
              activeOpacity={0.6}>
              <Text style={styles.itemTitle}>Comprar Novo Forno</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {}}
              activeOpacity={0.6}>
              <Text style={styles.itemTitle}>Criar um novo Fundo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: '100%',
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
  content: {},
  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#305F95',
  },
});
export default FundoReserva;