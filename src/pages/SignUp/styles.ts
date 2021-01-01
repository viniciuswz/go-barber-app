import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #f4ede8;
  font-size: 20px;
  margin: 64px 0 24px;
`;

export const BackToLogin = styled.TouchableOpacity`
  width: 100%;
  border-top-width: 1px;
  border-color: #232129;
  background: #312e38;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToLoginText = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  margin-left: 16px;
`;
