import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { DataSheet } from '../../components/DataSheet';
import { ImageSlider } from '../../components/ImageSlider';
import { CarDTO } from '../../dtos/CarDTO';
import { CarDetailsProps } from '../../global/routes';
import { getAccessories } from '../../utils/getAccessories';
import {
  About, Brand, Car, CarImage, Container, DataSheetGrid,
  Details, Footer, Header, Name, Period,
  Price, Rent
} from './styles';

interface RouteParam {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute<CarDetailsProps>();
  const theme = useTheme();
  const { car } = route.params as RouteParam;

  const scrollVertically = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollVertically.value = event.contentOffset.y;
  });

  const headerStyleAnimated = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollVertically.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      )
    };
  });

  const sliderCarsStyleAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollVertically.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    };
  });

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling', {
      car
    });
  };

  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Animated.View style={[headerStyleAnimated, styled.header, {backgroundColor: theme.colors.background_primary}]}>
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
        </Header>
        <Animated.View style={sliderCarsStyleAnimated}>
          <CarImage>
            <ImageSlider imageUrl={car.photos} />
          </CarImage>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView contentContainerStyle={{
        paddingHorizontal: 24,
        paddingTop: getStatusBarHeight() + 160,
        alignItems: 'center',
      }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        //in scrollEventThrottle use 16, 'cause 1000 ms divides by 60 will be 16, so with this value we will have 60 frames per second
        scrollEventThrottle={16}
      >
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
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  )
}

const styled = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  }
});
