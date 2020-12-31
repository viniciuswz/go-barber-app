import React from 'react';

import { Container, Title, Image } from './styles';
import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Password" />
      <Button
        onPress={() => {
          console.log('jaca');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
