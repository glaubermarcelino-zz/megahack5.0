import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import {Container, Form, Input, Title} from './styles';
import { Feather as Icon } from "react-native-vector-icons";

const Login: React.FC = () => {
  return (
    <Container>
      <View>
        <Image
          source={{
            uri:
              'https://trello-attachments.s3.amazonaws.com/5fa985f31cd1300e176e7028/616x235/e5aa89ee13d9e145bf0d5e0e1c17ab01/Frame_4_%281%29.png',
          }}
        />
        <Form>
          <Title>Faça seu Login</Title>
          <View>
            <Text style={styles.label}>CNPJ</Text>
            <Input />
          </View>
          <View>
            <Text style={styles.label}>Senha:</Text>
            <Input />
          </View>
          <Text style={styles.avisoSenha}>Esqueceu sua senha?</Text>
          <RectButton style={styles.button} onPress={handleNavigateToPoint}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#fff" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Continuar</Text>
          </RectButton>
        </Form>
        <View>
          <Text>Novo por aqui?</Text>
          <Link to="/">Crie uma conta agora</Link>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  avisoSenha: {},
  label: {},
  submit: {},
});
export default Login;
