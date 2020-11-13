import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#FE6C6D', '#305F95']
})`
  flex: 1;
`;

export const Logo = styled.Image`
  src: '../assets/linker-plus.png';
`;
