import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import { AnimatedLoadingCar } from '../../components/AnimatedLoadingCar';
import {
  CarList, Container, Content, DateScheduled, End, Footer, Header, HeaderSubTitle, HeaderTitle, Quantity, ScheuduleQuantity, Start, Text, Title
} from './styles';

export interface CarScheduled {
  id: number;
  user_id: number;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function SchedulingDone() {
  const [carsScheduled, setCarsScheduled] = useState<CarScheduled[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await api.get<CarScheduled[]>('/schedules_byuser');

        if (data) {
          setCarsScheduled(data);
        }
      } catch (error) {
        Alert.alert(
          'Erro',
          'Erro ao carregar a lista de veículos agendados',
          [
            {
              text: 'Entendi',
              onPress: () => { }
            }
          ]
        )
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [])

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton
          onPress={() => navigation.goBack()}
          color='white'
        />
        <HeaderTitle>
          Seus agendamentos,{'\n'}
          estão aqui.
        </HeaderTitle>

        <HeaderSubTitle>
          Conforto, segurança e praticidade.
        </HeaderSubTitle>
      </Header>
      <Content>
        {
          loading
            ? <AnimatedLoadingCar />
            : <>
              <ScheuduleQuantity>
                <Text>
                  Agendamentos feitos
                </Text>
                <Quantity>{carsScheduled.length}</Quantity>
              </ScheuduleQuantity>
              <CarList
                data={carsScheduled}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) =>
                  <>
                    <Car
                      data={item.car}
                      onPress={() => { }}
                    />
                    <Footer>
                      <Title>
                        período
                      </Title>
                      <DateScheduled>
                        <Start>
                          {item.startDate}
                        </Start>
                        <AntDesign name='arrowright' size={20} color={theme.colors.text_detail} style={{ marginHorizontal: 10 }} />
                        <End>
                          {item.endDate}
                        </End>
                      </DateScheduled>
                    </Footer>
                  </>
                }
              />
            </>
        }
      </Content>
    </Container>
  )
}
