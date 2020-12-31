import React from 'react';

import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flexGrow: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={500}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu logon</Title>
            </View>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Password" />
            <Button
              onPress={() => {
                console.log('jaca');
              }}
            >
              Entrar
            </Button>
            <ForgotPassword
              onPress={() => {
                console.log('jaca');
              }}
            >
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
          <CreateAccountButton
            onPress={() => {
              console.log('jaca');
            }}
          >
            <Icon name="log-in" size={20} color="#fd9000" />
            <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
          </CreateAccountButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
