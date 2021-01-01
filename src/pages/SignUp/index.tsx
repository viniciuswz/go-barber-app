import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {
  Image,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToLogin, BackToLoginText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Input name="user" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button>Entrar</Button>
          </Container>
          <BackToLogin
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon size={20} name="arrow-left" color="#F4EDE8" />
            <BackToLoginText>Voltar para o login</BackToLoginText>
          </BackToLogin>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
