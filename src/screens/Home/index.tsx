import React from 'react';
import { StatusBar } from 'react-native';
import LogoSvg from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize'

import {
  Container,
  Header,
  HeaderContent,
  Logo,
  CarTotal,
  CarList
} from './styles';
import { Car, CarData } from '../../components/Car';

export function Home() {
  const data: CarData = {
    brand: 'audi',
    name: 'RS 5 Coumpé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  }

  return(
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo>
            <LogoSvg
              width={RFValue(108)}
              height={RFValue(12)} />
          </Logo>
          <CarTotal>
            Total de 12 carros
          </CarTotal>
        </HeaderContent>
      </Header>
      {/* <Car data={data} /> */}
      <CarList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={data} />}
      />
    </Container>
  )
}
