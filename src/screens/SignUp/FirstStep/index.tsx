import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
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

export function FirstStep() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicense, setDriverLicense] = useState('');

  const handleNextStep = async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().min(3, 'O precisa ter no mínimo 3 letras no nome'),
        email: Yup.string().email('Digite um e-mail válido'),
        driverLicense: Yup.string(),
      });

      const user = {
        name,
        email,
        driverLicense
      }

      await schema.validate(user);

      navigation.navigate('SecondStep', {user});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(
          'Atenção',
         error.message
        )
      } else {
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro no cadastro, verifique suas credenciais'
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
                <Bullet active />
                <Bullet active={false} />
              </IndexSteps>
            </HeaderContent>
          </Header>

          <Title>
            Crie sua {'\n'}
            conta
          </Title>
          <SubTitle>
            Faça seu cadastro de {'\n'}
            forma rápida e fácil.
          </SubTitle>
          <Content>
            <TextStep>1. Dados</TextStep>

            <Input
              iconName='user'
              placeholder='Nome'
              onChangeText={setName}
              value={name}
            />
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              onChangeText={setEmail}
              value={email}
            />
            <Input
              iconName='credit-card'
              placeholder='CNH'
              keyboardType='numeric'
              onChangeText={setDriverLicense}
              value={driverLicense}
            />

            <ButtonContainer>
              <Button
                title='Próximo'
                onPress={handleNextStep}
                enabled={!!name && !!email && !!driverLicense}
                loading={false}
              />
            </ButtonContainer>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
