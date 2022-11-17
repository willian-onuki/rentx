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
  CarList,
  MyCars
} from './styles';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Loading } from '../../components/Loading';
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigation = useNavigation();
  const theme = useTheme();

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate('CarDetails', { car });
  }

  useEffect(() => {
    const init = async () => {
      try {
        const {data} = await api.get('/cars');
        if (data)
          setCars(data);
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
      <MyCars onPress={() => navigation.navigate('SchedulingDone')}>
        <Ionicons name='ios-car-sport' color={theme.colors.background_primary} size={32} />
      </MyCars>
    </Container>
  )
}
