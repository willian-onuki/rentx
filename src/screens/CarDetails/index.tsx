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
import { DataSheet, DataSheetProps } from '../../components/DataSheet';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { CarDetailsProps } from '../../global/routes';
import { getAccessories } from '../../utils/getAccessories';

interface RouteParam {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute<CarDetailsProps>();

  const { car } = route.params as RouteParam;

  const handleConfirmRental = () => {
    navigation.navigate('CarDetails');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
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
              {car.brand}
            </Brand>
            <Name>
              {car.name}
            </Name>
          </Car>
          <Rent>
            <Period>
              {car.rent.period}
            </Period>
            <Price>
              R$ {car.rent.price}
            </Price>
          </Rent>
        </Details>
        <DataSheetGrid>
          {car.accessories.map(({ type, name }, index) => (
            <DataSheet key={index} svg={getAccessories(type)} detail={name} />
          ))}
        </DataSheetGrid>

        <About>
          {car.about}
        </About>
      </Content>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  )
}
