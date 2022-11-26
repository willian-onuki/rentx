import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
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

import Animated, { useAnimatedStyle, useSharedValue, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

const AnimatedButton = Animated.createAnimatedComponent(RectButton)

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigation = useNavigation();
  const theme = useTheme();

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const myCarsButtonAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value }
      ]
    };
  });

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate('CarDetails', { car });
  }

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      // in this case, was used any to create new properties to ctx, like positionX and positionY storing the last position value
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive: (event, ctx: any) => {
      positionX.value = event.translationX + ctx.positionX;
      positionY.value = event.translationY + ctx.positionY;
    },
    onEnd: () => {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    }
  })

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await api.get('/cars');
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

  return (
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
        : <Loading />
      }
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[myCarsButtonAnimated,
            {
              position: 'absolute',
              bottom: 13,
              right: 22,
            }
          ]}
        >
          <AnimatedButton
            onPress={() => navigation.navigate('SchedulingDone')}
            style={[styled.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons name='ios-car-sport' color={theme.colors.background_primary} size={32} />
          </AnimatedButton>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  )
}

const styled = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
