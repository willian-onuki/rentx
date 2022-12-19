import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { InputPassword } from '../../../components/InputPassword';
import {
  Container,
  Header,
  IndexSteps,
  Title,
  SubTitle,
  TextStep,
  Content,
  ButtonContainer,
  HeaderContent,
} from './styles';
import * as Yup from 'yup';
import { SignUpSecondStepProps } from '../../../global/routes';
import { api } from '../../../services/api';

export interface User {
  name: string;
  email: string;
  driverLicense: string;
  password: string;
}

export function SecondStep() {
  const navigation = useNavigation();
  const route = useRoute<SignUpSecondStepProps>();
  const theme = useTheme();

  const { user } = route.params;

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleFinishRegistration = async () => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().min(6, 'A senha precisa ter no mínimo 6 letras'),
        passwordConfirm: Yup.string().oneOf(
          [Yup.ref('password')],
          'A senha deve ser igual'
        ),
      });

      await schema.validate({ password, passwordConfirm });

      await api
        .post('/users', {
          name: user.name,
          email: user.email,
          driver_license: user.driverLicense,
          password,
        })
        .then(() => {
          navigation.navigate('Success', {
            title: 'Conta criada!',
            nextRoute: 'SignIn',
          });
        })
        .catch(() => {
          Alert.alert(
            'Opa',
            'Não foi possível finalizar o seu cadastro.'
          );
        });

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Atenção', error.message);
      } else {
        Alert.alert(
          'Erro ao cadastrar',
          'Ocorreu um erro ao finalizar o cadastro.'
        );
      }
    }
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
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <HeaderContent>
              <BackButton
                onPress={() => {
                  navigation.goBack();
                }}
              />

              <IndexSteps>
                <Bullet active={false} />
                <Bullet active />
              </IndexSteps>
            </HeaderContent>
          </Header>
          <Content>
            <TextStep>2. Senha</TextStep>

            <InputPassword
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
            <InputPassword
              placeholder='Repetir senha'
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />

            <ButtonContainer>
              <Button
                title='Cadastrar'
                color={theme.colors.success}
                onPress={handleFinishRegistration}
                enabled={!!password && !!passwordConfirm}
                loading={false}
              />
            </ButtonContainer>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
