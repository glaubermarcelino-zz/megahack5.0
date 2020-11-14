import React from 'react';
import {View, StyleSheet} from 'react-native';

// import { Container } from './styles';
interface HeaderProps {
  titulo: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return <View style={styles.header}>{props.titulo}</View>;
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#305F95',
  },
});
export default Header;
