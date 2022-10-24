import React from 'react';
import { ListRenderItem, StatusBar } from 'react-native';

import {
  Container,
  Header,
  CarImage,
  Content,
  DataSheetGrid,
  Details,
  Car,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Footer,
} from './styles';
import Speed from '../../assets/speed.svg';
import Acceleration from '../../assets/acceleration.svg';
import Force from '../../assets/force.svg';
import Gasoline from '../../assets/gasoline.svg';
import Exchange from '../../assets/exchange.svg';
import People from '../../assets/people.svg';
import { DataSheet, DataSheetProps } from '../../components/DataSheet';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';


export function CarDetails() {
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

  return (
    <Container>
      {/* <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      /> */}
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={() => { }} />
      </Footer>
    </Container>
  )
}
