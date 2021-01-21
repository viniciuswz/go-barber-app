import React, { useCallback, useRef } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
  Image,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { string } from 'yup/lib/locale';

import logoImg from '../../assets/logo.png';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToLogin, BackToLoginText } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailTextInput = useRef<TextInput>(null);
  const passwordTextInput = useRef<TextInput>(null);

  const handleSubmitForm = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('E-mail no formato inválido'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Mínimo 6 digitos'),
        });

        const { email, password } = data;

        await schema.validate(data, {
          abortEarly: false,
        });
        // await signIn({
        //   email,
        //   password,
        // });

        Alert.alert(
          'Cadastro realizado com successo',
          'Você já poide fazer login na aplicação',
        );
        navigation.goBack();
        // Alert.alert();
        await api.post('/users', data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }
        console.log(error);
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais',
        );
      }
    },
    [navigation],
  );

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
            <Form onSubmit={handleSubmitForm} ref={formRef}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => emailTextInput.current?.focus()}
              />
              <Input
                ref={emailTextInput}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => passwordTextInput.current?.focus()}
              />
              <Input
                ref={passwordTextInput}
                autoCorrect={false}
                name="password"
                icon="lock"
                placeholder="Senha"
                textContentType="newPassword"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
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
