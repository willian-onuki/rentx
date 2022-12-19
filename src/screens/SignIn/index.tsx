import React, { useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import * as Yup from 'yup';

import {
  Container,
  Header,
  Title,
  SubTitle,
  WrapperInput,
  WrapperButtons,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'A senha precisa ter no mínimo 6 letras'),
      });
      const credentials = {
        email,
        password
      }
      await schema.validate(credentials);
      await signIn(credentials);

      navigation.navigate('Home')
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Atenção', error.message);
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique suas credenciais'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNewAccount = () => {
    navigation.navigate('FirstStep');
  };

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle='dark-content'
            backgroundColor={theme.colors.background_primary}
            translucent
          />
          <Header>
            <Title>
              Estamos{'\n'}
              quase lá.
            </Title>
            <SubTitle>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <WrapperInput>
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={setEmail}
              value={email}
            />
            <InputPassword
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
          </WrapperInput>

          <WrapperButtons>
            <Button
              title='Login'
              onPress={handleSignIn}
              enabled={!!email && !!password}
              loading={loading}
            />
            <Button
              title='Criar conta gratuita'
              onPress={handleNewAccount}
              enabled={!loading}
              loading={loading}
              color={theme.colors.background_secondary}
              light
            />
          </WrapperButtons>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
