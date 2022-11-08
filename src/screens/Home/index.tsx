import React, { useEffect, useState } from 'react';
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
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Loading } from '../../components/Loading';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigation = useNavigation();

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate('CarDetails', { car });
  }

  useEffect(() => {
    const init = async () => {
      try {
        const {data} = await api.get('/cars');
        if (data)
          setCars(data);
        else
          console.log('empty list of cars');

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [])

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
            Total de {cars ? cars.length : '0'}
          </CarTotal>
        </HeaderContent>
      </Header>
      {!loading
        ? <CarList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <Car
            data={item}
            onPress={() => handleCarDetails(item)}
          />
        }
        />
        : <Loading/>
      }
    </Container>
  )
}
