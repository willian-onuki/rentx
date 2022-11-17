import React, { useEffect, useState } from 'react';

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
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { SchedulingDetailsProps } from '../../global/routes';
import { getAccessories } from '../../utils/getAccessories';
import { addDays, format } from 'date-fns';
import { api } from '../../services/api';
import { Alert } from 'react-native';

interface RentalPeriod {
  totalDays: number;
  totalRent: number;
  start: string;
  end: string;
}

interface Response {
  id: string;
  unavailable_dates: string[];
}

export function SchedulingDetails() {
  const navigation = useNavigation();
  const route = useRoute<SchedulingDetailsProps>();
  const { car, dates } = route.params;

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
  const [loading, setLoading] = useState<boolean>(false);

  const theme = useTheme();

  const handleScheduleComplete = async () => {
    setLoading(true)
    try {
      const { data } = await api.get<Response>(`/schedules_bycars/${car.id}`);
      const previousDates = data.unavailable_dates;
      const unavailable_dates = [
        ...previousDates,
        ...dates
      ]
      await api.post('/schedules_byuser', {
        user_id: 1,
        car,
        startDate: rentalPeriod.start,
        endDate: rentalPeriod.end
      })
      await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates
      })

      navigation.dispatch(StackActions.popToTop());
      navigation.navigate('SchedulingComplete');
    } catch (error) {
      Alert.alert(
        'Erro',
        'Ocorreu um erro ao alugar o veículo',
        [
          {
            text: 'Entendi',
            onPress: () => { },
          }
        ]
      )
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const totalDays = dates.length - 1;
    const totalRent = totalDays * car.rent.price;

    const start = format(addDays(new Date(dates[0]), 1), 'dd/MM/yyyy')
    const end = format(addDays(new Date(dates[totalDays]), 1), 'dd/MM/yyyy')

    setRentalPeriod({
      totalDays,
      totalRent,
      start,
      end
    });
  }, [])

  return (
    <Container>
      <Header>
        <BackButton onPress={() => { navigation.goBack() }} />
      </Header>
      <CarImage>
        <ImageSlider imageUrl={car.photos} />
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
          {car.accessories.map(({ name, type }, index) => (
            <DataSheet key={index} svg={getAccessories(type)} detail={name} />
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
              {rentalPeriod.start}
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
              {rentalPeriod.end}
            </DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>
            Total
          </RentalPriceLabel>
          <RentalPriceDetail>
            <RentalPriceQuota>R$ {car.rent.price} x{rentalPeriod.totalDays} diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentalPeriod.totalRent}</RentalPriceTotal>
          </RentalPriceDetail>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title='Alugar agora' onPress={handleScheduleComplete} type='success' loading={loading} enabled={!loading} />
      </Footer>
    </Container>
  )
}
