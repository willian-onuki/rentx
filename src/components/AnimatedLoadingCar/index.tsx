import React from 'react';
import LottieView from 'lottie-react-native';
import carAnimated from '../../assets/car_animated.json';

import { Container } from './styles';

export function AnimatedLoadingCar() {
  return (
    <Container>
      <LottieView
        autoPlay
        loop
        source={carAnimated}
        style={{
          height: 200,
        }}
        resizeMode="contain"
      />
    </Container>
  )
}
