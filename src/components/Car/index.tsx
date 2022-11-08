import React from 'react';
import EnergyFuel from '../../assets/energy.svg';
import GasolineFuel from '../../assets/gasoline.svg';
import { RectButtonProps } from 'react-native-gesture-handler'

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
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessories } from '../../utils/getAccessories';

interface Props extends RectButtonProps{
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const FuelSvg = getAccessories(data.fuel_type);
  return (
    <Container {...rest}>
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
            <FuelSvg/>
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
