import React from 'react';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Rent,
  Header,
  Title,
  Period,
  Field,
  Label,
  Date,
  Content,
  Footer,
} from './styles';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleScheduleComplete = () => {
    navigation.navigate('SchedulingDetails')
  }

  return(
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      {/* <Rent> */}
        <Header>
          <BackButton color={theme.colors.shape} />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>
        <Period>
          <Field>
            <Label>de</Label>
            <Date selected={true}>18/12/2000</Date>
          </Field>
          <ArrowSvg width={48} height={10} />
          <Field>
            <Label>até</Label>
            <Date />
          </Field>
        </Period>
      </Header>

        <Content>
          <Calendar/>
        </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleScheduleComplete}/>
        </Footer>
      {/* </Rent> */}
    </Container>
  )
}
