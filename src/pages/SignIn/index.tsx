import React from 'react';

import { Container, Text, Image } from './styles';
import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Text>Faça seu logon</Text>
    </Container>
  );
};

export default SignIn;
