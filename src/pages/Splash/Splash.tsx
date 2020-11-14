import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';

import {Container} from './styles';

export default class Splash extends React.Component {
  constructor(props:any) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 5000);
  }

  render() {
    //Oculta a barra de status
    StatusBar.setHidden(true);
    return (
      <Container>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Image
            style={{
              width: 310,
              height: 120,
              alignSelf: 'center',
              marginLeft: 65,
            }}
            source={require('../../assets/images/linker-plus-white.png')}
          />
        </View>
      </Container>
    );
  }
}
