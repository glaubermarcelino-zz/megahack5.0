import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { StatusBar } from 'react-native';

import {Container} from './styles';

const Splash: React.FC = () => {
  //Oculta a barra de status
  StatusBar.setHidden(true);
  return (
    <Container>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/linker-plus-white.png')}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 310,
    height:120,
    alignSelf:'center',
    marginLeft:65,
  },
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});
export default Splash;
