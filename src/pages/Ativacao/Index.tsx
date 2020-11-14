import React,{useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  StatusBar,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {withFormik} from 'formik';
import { Title} from './styles';
import {useNavigation} from '@react-navigation/native';


const Ativacao: React.FC = (props: any) => {
  const navigation = useNavigation();
  function handleNavigateToSucesso() {
    navigation.navigate('Sucesso');
  }

  //Oculta a barra de status
  StatusBar.setHidden(true);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/images/linker-plus283x123.png')}
        />
        <Title
          style={{
            color: '#5F628C',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 30,
          }}>
          Abra sua conta
        </Title>
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

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TextInput
            style={styles.codigoVerificacao6}
            value={props.values.codigo1}
            maxLength={1}
            onChangeText={(text) => props.setFieldValue('codigo1', text)}
          />
          <TextInput
            style={styles.codigoVerificacao6}
            value={props.values.codigo2}
            maxLength={1}
            onChangeText={(text) => props.setFieldValue('codigo2', text)}
          />
          <TextInput
            style={styles.codigoVerificacao6}
            value={props.values.codigo3}
            maxLength={1}
            onChangeText={(text) => props.setFieldValue('codigo3', text)}
          />
          <TextInput
            style={styles.codigoVerificacao6}
            value={props.values.codigo4}
            maxLength={1}
            onChangeText={(text) => props.setFieldValue('codigo4', text)}
          />
          <TextInput
            style={styles.codigoVerificacao6}
            value={props.values.codigo5}
            maxLength={1}
            onChangeText={(text) => props.setFieldValue('codigo5', text)}
          />
          <TextInput
            style={styles.codigoVerificacao6}
            value={props.values.codigo6}
            maxLength={1}
            onChangeText={(text) => props.setFieldValue('codigo6', text)}
          />
        </View>

        <View style={styles.buttonSection}>
          <RectButton 
          style={styles.button} 
          // onPress={props.handleSubmit}
          onPress={() => handleNavigateToSucesso()}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </RectButton>
        </View>
        <View style={styles.content}>
          <View style={styles.enviarNovamente}>
            <TouchableOpacity
              onPress={() => Linking.openURL('http://google.com')}>
              <Text style={{color: '#FE6C6D', fontSize: 16}}>
                <Text
                  style={{fontSize: 16, color: '#186BFE', fontWeight: 'bold'}}>
                  Enviar novamente?
                </Text>
                (59s)
              </Text>
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
  codigoVerificacao6: {
    color: '#092058',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#092058',
    width: 15,
    padding: 0,
    marginLeft: 10,
  },
  buttonSection: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  titulo: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  enviarNovamente: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 0,
    paddingTop: 0,
  },
  avisoSenha: {fontSize: 16, color: '#FFEEE5', marginBottom: 10},
  button: {
    backgroundColor: '#FE6C6D',
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
    width: 248,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});
export default withFormik({
  mapPropsToValues: () => ({
    codigo1: '',
    codigo2: '',
    codigo3: '',
    codigo4: '',
    codigo5: '',
    codigo6: '',
  }),

  handleSubmit: (values) => {
    console.log(values);
  },
})(Ativacao);
