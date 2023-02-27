import React, { useEffect, useState } from 'react';
import { StatusBar, KeyboardAvoidingView, Keyboard, Alert } from 'react-native';
import { BackButton } from '../../components/BackButton';
import {
  BorderlessButton,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  HeaderContent,
  HeaderTitle,
  ProfilePicture,
  Picture,
  ButtonCamera,
  SwitchableComponents,
  WrapperButtons,
  Section,
} from './styles';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { ButtonSwitchComponent } from '../../components/ButtonSwitchComponent';
import { FormData } from '../../components/FormData';
import { FormPassword } from '../../components/FormPassword';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useAuth, User } from '../../hooks/auth';
import * as ImagePicker from 'expo-image-picker';
import PeopleSvg from '../../assets/people.svg';

import * as Yup from 'yup';

export function Profile() {
  const { user, updateUser, signOut } = useAuth();

  const theme = useTheme();
  const navigation = useNavigation();
  const [option, setOptions] = useState<'dataEdit' | 'passwordEdit'>(
    'dataEdit'
  );
  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSelectedOption = (option: 'dataEdit' | 'passwordEdit') => {
    setOptions(option);
  };

  const handleAlertSelectAvatar = () => {
    Alert.alert(
      'Foto para o perfil',
      'Selecione uma das opções para inserir uma foto de perfil',
      [
        {
          text: 'Selecionar foto',
          onPress: () => handleSelectAvatar(),
        },
        {
          text: 'Tirar foto',
          onPress: () => handleTakeProfilePicture(),
        },
      ]
    );
  };

  const handleTakeProfilePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled === false) {
      setAvatar(result.uri);
    }
  };

  const handleSelectAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled === false) {
      setAvatar(result.uri);
    }
  };

  const saveChanges = async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        driverLicense: Yup.string().required('CNH é obrigatório'),
      });

      await schema.validate({ name, driverLicense });

      const userChanges = { ...user, avatar, name, driverLicense } as User;
      await updateUser(userChanges);

      Alert.alert('Perfil atualizado!');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert('Erro ao savar aterações');
      }
    }
  };

  const handleSignOut = async () => {
    Alert.alert(
      'Tem certeza?',
      'Se desconectar, irá precisar de internet para conectar novamente.',
      [
        {
          text: 'Não',
          onPress: () => { },
        },
        {
          text: 'Sair',
          onPress: () => signOut(),
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle='light-content'
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <HeaderContent>
              <BackButton
                color={theme.colors.shape}
                onPress={() => navigation.goBack()}
              />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <BorderlessButton onPress={handleSignOut}>
                <Feather
                  name='power'
                  size={24}
                  color={theme.colors.background_secondary}
                />
              </BorderlessButton>
            </HeaderContent>

            <ProfilePicture>
              {!!avatar ? (
                <Picture
                  source={{
                    uri: avatar,
                  }}
                />
              ) : (
                <PeopleSvg
                  height={180}
                  width={100}
                  style={{}}
                />
              )}
              <ButtonCamera onPress={handleAlertSelectAvatar}>
                <Feather
                  name='camera'
                  size={24}
                  color={theme.colors.background_secondary}
                />
              </ButtonCamera>
            </ProfilePicture>
          </Header>
          <SwitchableComponents
            style={{ marginBottom: useBottomTabBarHeight() }}
          >
            <WrapperButtons>
              <ButtonSwitchComponent
                title='Dados'
                active={option === 'dataEdit'}
                onPress={() => handleSelectedOption('dataEdit')}
              />
              <ButtonSwitchComponent
                title='Alterar senha'
                active={option === 'passwordEdit'}
                onPress={() => handleSelectedOption('passwordEdit')}
              />
            </WrapperButtons>
            <Section>
              {option !== 'passwordEdit' ? (
                <FormData
                  setName={setName}
                  name={name}
                  setEmail={setEmail}
                  email={email}
                  setDriverLicense={setDriverLicense}
                  driverLicense={driverLicense}
                />
              ) : (
                <FormPassword
                  type='edit'
                  setCurrentPassword={setCurrentPassword}
                  currentPassword={currentPassword}
                  setPassword={setPassword}
                  password={password}
                  setPasswordConfirm={setPasswordConfirm}
                  passwordConfirm={passwordConfirm}
                />
              )}
            </Section>
            <Button
              title='Salvar alterações'
              onPress={saveChanges}
            />
          </SwitchableComponents>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
