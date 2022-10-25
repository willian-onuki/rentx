import React from 'react';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import Acceleration from '../../assets/acceleration.svg';
import Exchange from '../../assets/exchange.svg';
import Force from '../../assets/force.svg';
import Gasoline from '../../assets/gasoline.svg';
import People from '../../assets/people.svg';
import Speed from '../../assets/speed.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { DataSheet } from '../../components/DataSheet';
import { ImageSlider } from '../../components/ImageSlider';
import {
  Brand, CalendarIcon, Car, CarImage, Container, Content,
  DataSheetGrid, DateInfo,
  DateTitle,
  DateValue, Details, Footer, Header, Name, Period,
  Price, Rent, RentalPeriod, RentalPrice, RentalPriceDetail, RentalPriceLabel, RentalPriceQuota,
  RentalPriceTotal
} from './styles';

export function SchedulingDetails() {
  const dataSheet = [
    {
      svg: Speed,
      detail: '380km/h'
    },
    {
      svg: Acceleration,
      detail: '3.2s'
    },
    {
      svg: Force,
      detail: '800 HP'
    },
    {
      svg: Gasoline,
      detail: 'Gasolina'
    },
    {
      svg: Exchange,
      detail: 'Auto'
    },
    {
      svg: People,
      detail: '2 pessoas'
    },
  ]

  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>
      <CarImage>
        <ImageSlider imageUrl={[
          'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
        ]} />
      </CarImage>
      <Content>
        <Details>
          <Car>
            <Brand>
              Lamborghini
            </Brand>
            <Name>
              Huracan
            </Name>
          </Car>
          <Rent>
            <Period>
              Ao dia
            </Period>
            <Price>
              R$ 580
            </Price>
          </Rent>
        </Details>
        <DataSheetGrid>
          {dataSheet.map(({ svg, detail }, index) => (
            <DataSheet key={index} svg={svg} detail={detail} />
          ))}
        </DataSheetGrid>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>
              DE
            </DateTitle>
            <DateValue>
              25/10/2022
            </DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>
              ATE
            </DateTitle>
            <DateValue>
              25/10/2022
            </DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>
            Total
          </RentalPriceLabel>
          <RentalPriceDetail>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetail>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title='Alugar agora' onPress={() => { }} type='success' />
      </Footer>
    </Container>
  )
}
