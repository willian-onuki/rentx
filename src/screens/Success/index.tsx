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
import { useNavigation, useRoute } from '@react-navigation/native';
import { SuccessProps } from '../../global/routes';

interface Navigation {
  navigate: (route: string) => void;
}

export function Success() {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<SuccessProps>();

  const { title, message, nextRoute } = route.params;

  const { width } = useWindowDimensions();

  const handleSchedulingCompleted = () => {
    navigation.navigate(nextRoute);
  };

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <UnionSvg width={width} />
      </Header>
      <Content>
        <DoneSvg
          width={80}
          height={80}
        />
        <Title>{title}</Title>
        {message && <Text>{message}</Text>}
      </Content>
      <Footer>
        <Button onPress={handleSchedulingCompleted}>
          <ButtonTitle>Ok</ButtonTitle>
        </Button>
      </Footer>
    </Container>
  );
}
