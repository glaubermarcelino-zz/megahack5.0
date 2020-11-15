import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header/Index';
// import CreditCardDisplay from 'react-native-credit-card-display';
// import Tabbar from '../../components/TabBar/Tabbar';
// import {Picker} from '@react-native-picker/picker';

const Cartoes = () => {
  // const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={{flex: 1}}>
      <GeneralStatusBarColor
        backgroundColor="#305F95"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header titulo={""}/>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.welcome}>Meus Cartões</Text>
          <FeatherIcon style={{margin: 10}} name="plus" size={30} />
        </View>
        {/* <View style={{margin: 15}}>
          <CreditCardDisplay
            number={4242424242424242}
            cvc={123}
            expiration="04/21"
            name="Confeitaria Marisa"
            since="2020"
          />
        </View> */}

        <View
          style={{
            justifyContent: 'center',
            alignContent: 'space-between',
            flexDirection: 'column',
          }}>
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
            <Image source={require(' ')} />
            <Text>Limite Crédito</Text>
            <Text>R$ 56.000 de R$ 70.000</Text>
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
            <Text>Despesas</Text>
          </View>
          {/* <View>
            <Picker
              selectedValue={selectedValue}
              style={{height: 50, width: 150}}
              onValueChange={(itemValue:any, itemIndex:any) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View> */}
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
            <Text>Últimas Transações</Text>
          </View>
        </View>
      </View>
      {/* <Tabbar /> */}
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
