import React, { useState } from 'react';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Rent,
  Header,
  Title,
  Period,
  Field,
  Label,
  DateSelected,
  Content,
  Footer,
} from './styles';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { StatusBar, Alert } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar, MarkedDatesProps } from '../../components/Calendar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DateData } from 'react-native-calendars';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { addDays, format } from 'date-fns';
import { RouteProps } from '../../global/routes';
import { api } from '../../services/api';

export interface RentalPeriod {
  start: string;
  end: string;
}

interface Response {
  id: string;
  unavailable_dates: string[];
}

export function Scheduling() {
  const [lastDaySelected, setLastDaySelected] = useState<DateData>({} as DateData);
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute<RouteProps<'Scheduling'>>();

  const { car } = route.params

  const handleScheduleDetails = () => {
    if (!rentalPeriod.start || !rentalPeriod.end)
      Alert.alert(
        'Atenção',
        'É necessário selecionar uma data para continuar',
        [
          {
            text: 'Entendi',
            onPress: () => { }
          }
        ]
      )
    else {
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDates)
      });
    }
  }

  const handleChangeDate = async (date: DateData) => {
    let start = !lastDaySelected.timestamp ? date : lastDaySelected;
    let end = date;
    let interval: MarkedDatesProps;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastDaySelected(end);
    interval = generateInterval(start, end);

    if (start.timestamp && end.timestamp) {
      const invalidDates = await validateDate(interval);

      if (invalidDates.length) {
        Alert.alert(
          'Atenção',
          `Alguém já alugou esse veículo nas datas:
          ${invalidDates.map(date =>
            `\n${format(addDays(new Date(date), 1), 'dd/MM/yyyy')}`
          )}
          `,
          [
            {
              text: 'Entendi',
              onPress: () => {
                setLastDaySelected({} as DateData);
                setMarkedDates({} as MarkedDatesProps);
                setRentalPeriod({} as RentalPeriod);
              }
            }
          ]
        )
      }
    }

    setMarkedDates(interval);

    setRentalPeriod({
      start: format(addDays(start.timestamp, 1), 'dd/MM/yyyy'),
      end: format(addDays(end.timestamp, 1), 'dd/MM/yyyy'),
    })
  }

  const validateDate = async (interval: MarkedDatesProps) => {
    const { data } = await api.get<Response>(`/schedules_bycars/${car.id}`);
    let invalidDate: string[] = [];
    const dates = Object.keys(interval)

    dates.forEach((date => data.unavailable_dates.filter(dateSelected => {
      if (dateSelected === date)
        invalidDate.push(date)
    })))

    return invalidDate;
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton color={theme.colors.shape} onPress={() => navigation.goBack()} />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>
        <Period>
          <Field>
            <Label>de</Label>
            <DateSelected selected={!!rentalPeriod.start}>{rentalPeriod.start}</DateSelected>
          </Field>
          <ArrowSvg width={48} height={10} />
          <Field>
            <Label>até</Label>
            <DateSelected selected={!!rentalPeriod.end}>{rentalPeriod.end}</DateSelected>
          </Field>
        </Period>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          dayPressed={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button title="Confirmar" enabled={!!rentalPeriod.start} onPress={handleScheduleDetails} />
      </Footer>
    </Container>
  )
}
