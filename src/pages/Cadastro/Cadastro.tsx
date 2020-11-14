import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Container, Title} from './styles';
import {FloatingLabelInput} from '../../components/FloatingLabelInput/index';
import {useNavigation} from '@react-navigation/native';

import {withFormik} from 'formik';

const Cadastro = (props: any) => {
  const [state, setState] = useState({value: ''});
  function handleNavigateToPoint() {}
  const handleTextChange = (newText: any) => setState({value: newText});

  const navigation = useNavigation();
  function handleNavigateToLogin() {
    navigation.navigate('Login');
  }
  function handleNavigateToAtivacao() {
    navigation.navigate('Ativacao');
  }

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.logo}
              source={require('../../assets/images/linker-plusvwhite.png')}
            />
            <Title style={styles.titulo}>Abra sua conta</Title>
            <View>
              <Text style={styles.label}>CNPJ</Text>
              <TextInput
                style={styles.input}
                value={props.values.cnpj}
                onChangeText={(text) => props.setFieldValue('cnpj', text)}
              />
            </View>
            <Text style={styles.label}>Empresa</Text>
            <TextInput
              style={styles.input}
              value={props.values.empresa}
              onChangeText={(text) => props.setFieldValue('empresa', text)}
            />
            <Text style={styles.label}>Endereço</Text>
            <TextInput
              style={styles.input}
              value={props.values.endereco}
              onChangeText={(text) => props.setFieldValue('endereco', text)}
            />
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={props.values.email}
              onChangeText={(text) => props.setFieldValue('email', text)}
            />
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              value={props.values.telefone}
              onChangeText={(text) => props.setFieldValue('telefone', text)}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              value={props.values.senha}
              onChangeText={(text) => props.setFieldValue('senha', text)}
            />
            <Text style={styles.label}>Confirmação de senha</Text>
            <TextInput
              style={styles.input}
              value={props.values.confirmasenha}
              onChangeText={(text) =>
                props.setFieldValue('confirmasenha', text)
              }
            />
            {/* <View style={{flex: 1}}>
              <StatusBar hidden />
              <FloatingLabelInput
                label="Glauber"
                value={props.values.nome}
                onChangeText={(text: any) => {
                  props.setFieldValue('nome', text);
                  setState(props.values.nome);
                  handleTextChange(state);
                }}
              />
            </View> */}
            <RectButton 
            style={styles.button} 
            onPress={() => handleNavigateToAtivacao()}
            
            // onPress={props.handleSubmit}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </RectButton>
            <View style={styles.criarConta}>
              <Text style={{fontSize: 16, color: '#FFEEE5'}}>
                Já possui conta?
              </Text>
              <TouchableOpacity
                onPress={() => handleNavigateToLogin()}>
                <Text style={{color: '#FE6C6D', fontSize: 16}}> Entrar</Text>
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
    padding: 15,
    height: '100%',
    lineHeight: 0,
  },
  titulo: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#fff',
    padding: 0,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    padding: 0,
  },
  criarConta: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginLeft: 5,
  },
  logo: {
    width: 165,
    height: 73,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 50,
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
    marginTop: 20,
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
})(Cadastro);
