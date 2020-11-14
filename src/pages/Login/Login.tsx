import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Container, Title} from './styles';

import {withFormik} from 'formik';

const Login = (props: any) => {
  function handleNavigateToPoint() {}

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.logo}
              source={require('../../assets/images/linker-plus-white.png')}
            />
            <Title style={styles.titulo}>Faça seu Login</Title>
            <Text style={styles.label}>CNPJ</Text>
            <TextInput
              style={styles.input}
              value={props.values.cnpj}
              onChangeText={(text) => props.setFieldValue('cnpj', text)}
            />
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              value={props.values.senha}
              onChangeText={(text) => props.setFieldValue('senha', text)}
            />
            <Text style={styles.avisoSenha}>Esqueceu sua senha?</Text>
            <RectButton style={styles.button} onPress={props.handleSubmit}>
              <Text style={styles.buttonText}>Continuar</Text>
            </RectButton>
            <View style={styles.criarConta}>
              <TouchableOpacity
                onPress={() => Linking.openURL('http://google.com')}>
                <Text style={{fontSize: 16, color: '#FFEEE5'}}>Novo?</Text>
                <Text style={{color: '#FE6C6D', fontSize: 16}}>
                  Crie uma conta agora
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
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
  criarConta: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    width: 310,
    height: 120,
    alignSelf: 'center',
    marginLeft: 65,
    marginBottom: 100,
  },
  avisoSenha: {fontSize: 16, color: '#FFEEE5', marginBottom: 10},
  submit: {},
  button: {
    backgroundColor: '#FE6C6D',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
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
  mapPropsToValues: () => ({cnpj: '', senha: ''}),

  handleSubmit: (values) => {
    console.log(values);
  },
})(Login);
