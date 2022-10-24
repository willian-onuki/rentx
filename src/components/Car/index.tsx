import React from 'react';
import Svg from 'react-native-svg';
import EnergyFuel from '../../assets/energy.svg';
import {
  Container,
  CarInformation,
  CarDetails,
  Brand,
  CarName,
  Expense,
  Period,
  Rent,
  Price,
  Fuel,
  CarImage,
} from './styles';

export interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  }
  // fuel: Svg;
  thumbnail: string;
}

interface Props {
  data: CarData;
}

export function Car({ data }: Props) {
  return (
    <Container>
      <CarInformation>
        <CarDetails>
          <Brand>{data.brand}</Brand>
          <CarName>{data.name}</CarName>
        </CarDetails>
        <Expense>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>R$ {data.rent.price}</Price>
          </Rent>
          <Fuel>
            <EnergyFuel />
          </Fuel>
        </Expense>
      </CarInformation>

      <CarImage
        source={{ uri: data.thumbnail }}
        resizeMode='contain'
      />
    </Container>
  )
}
