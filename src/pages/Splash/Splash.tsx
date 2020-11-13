import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {Container} from './styles';

const Splash: React.FC = () => {
  return (
    <Container>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/images/linker-plus.png')}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});
export default Splash;
