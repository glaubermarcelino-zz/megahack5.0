import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native';
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';
import Header from '../../components/Header/Index';
import CreditCardDisplay from 'react-native-credit-card-display';
// import Tabbar from '../../components/TabBar/Tabbar';
import {Picker} from '@react-native-picker/picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import ProgressCircle from 'react-native-progress-circle';


interface ItemProps{
id:string,
  title:string,
  img:string,
  date:string

}

const Cartoes = () => {
  const [selectedValue, setSelectedValue] = useState('mes');
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const listTransacoes:ItemProps[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      img: '',
      title: 'Atacadista',
      date: '11 novembro,2020',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      img: '',
      title: 'Loja de Embalagens',
      date: '10 novembro,2020',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      img: '',
      title: 'Gráfica',
      date: '10 novembro,2020',
    },
  ];
  const Item = (props:ItemProps) => (
    <View style={styles.item}>
      <Image source={require(props.img)}/>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.title}>{props.date}</Text>
    </View>
  );
  const renderItem = (item:ItemProps) => 
      listTransacoes.map((trans)=>
          {<Item key={trans.id} title={trans.title} date={trans.date} img={trans.img} id={trans.id}/>});
  return (
    <View style={{flex: 1}}>
      <GeneralStatusBarColor
        backgroundColor="#305F95"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Header titulo={'Olá, Confeitaria Marisa'} />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignContent: 'space-between',
              flexDirection: 'column',
            }}>
            <Text style={styles.welcome}>Meus Cartões</Text>
            {/* <Image source={require('../../assets/icons/add.png')} /> */}
          </TouchableOpacity>
        </View>
        <View style={{margin: 15, justifyContent: 'center'}}>
          <CreditCardDisplay
            number={4242424242424242}
            cvc={123}
            expiration="04/21"
            name="Confeitaria Marisa"
            since="2020"
          />
        </View>
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
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
                margin: 10,
              }}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 15,
                }}>
                <View style={{marginRight: 20}}>
                  <ProgressCircle
                    percent={80}
                    radius={40}
                    borderWidth={8}
                    color="#FE6C6D"
                    shadowColor="#999"
                    bgColor="#fff">
                    <Text style={{fontSize: 18}}>{'80%'}</Text>
                  </ProgressCircle>
                </View>
                <View>
                  <Text
                    style={{color: '#305F95', fontSize: 14, marginBottom: 10}}>
                    Seu Limite Crédito
                  </Text>
                  <Text style={{color: '#FE6C6D', fontSize: 14}}>
                    R$ 56.000 de R$ 70.000
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{overflow: 'hidden', paddingBottom: 5}}>
            <View
              style={{
                justifyContent: 'space-around',
                alignContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 0,
              }}>
              <Text
                style={{color: '#305F95', fontSize: 14, fontWeight: 'bold'}}>
                Despesas
              </Text>
              <Picker
                selectedValue={selectedValue}
                style={{
                  height: 50,
                  width: 100,
                  alignItems: 'flex-end',
                  marginLeft: 100,
                }}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="Mês" value="mes" />
                <Picker.Item label="Período" value="periodo" />
              </Picker>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Image
                style={{margin: 15}}
                source={require('../../assets/icons/grafico_despesa.png')}
              />
              {/* <LineChart
                width={730}
                height={250}
                data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart> */}
            </View>
          </View>

          <View style={{overflow: 'hidden', paddingBottom: 5}}>
            <Text>Últimas Transações</Text>
            {/* <FlatList
              data={listTransacoes}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            /> */}
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
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
});
export default Cartoes;
