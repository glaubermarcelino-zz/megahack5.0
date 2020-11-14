import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#FE6C6D', '#305F95'],
  start:{x:0.5,y:0},
  end:{x:0.5,y:0.65}
})`
  flex: 1;
`;
export const Form = styled.View`
`;
export const Input = styled.View`
`;
export const Submit = styled.TouchableOpacity`
`;
export const Title = styled.Text`
`;