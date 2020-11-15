import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
interface HeaderProps {
  titulo: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: '#fff', fontSize: 16}}>
          {props.titulo}
        </Text>
        <Image
          style={styles.logo}
          source={require('../../assets/images/linker-plus94x40.png')}
        />
      </View>
      <View style={{backgroundColor: '#FE6C6D', height: 9}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
  },
  header: {
    backgroundColor: '#305F95',
    height: 60,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
  },
  logo: {
    justifyContent: 'flex-end',
    width: 94,
    height: 40,
  },
});
export default Header;
