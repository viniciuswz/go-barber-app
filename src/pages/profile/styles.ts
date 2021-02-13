import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
  position: relative;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #f4ede8;
  font-size: 20px;
  margin: 24px 0px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;
export const BackButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
