import React from 'react';

import {
  Container,
  Content,
  Title,
  Text,
  Footer,
  Button,
  ButtonTitle,
  Header,
} from './styles';

import UnionSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete() {
  const navigation = useNavigation();

  const { width } = useWindowDimensions();

  const handleSchedulingCompleted = () => {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <UnionSvg
          width={width}
        />
      </Header>
      <Content>
        <DoneSvg
          width={80}
          height={80}
        />
        <Title>
          Carro alugado!
        </Title>
        <Text>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Text>
      </Content>
      <Footer>
        <Button onPress={handleSchedulingCompleted}>
          <ButtonTitle>
            Ok
          </ButtonTitle>
        </Button>
      </Footer>
    </Container>
  )
}
