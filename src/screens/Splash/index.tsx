import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AppStackParamList, AppStackScreenProps } from '../../global/routes';

export function Splash() {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 50],
        [1, 0],
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          )
        }
      ]
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 50],
        [0, 1],
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP
          )
        }
      ]
    };
  });

  const startApp = () => {
    navigation.navigate('SignIn');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      { duration: 1000 },
      () => {
        'worklet'
        runOnJS(startApp)();
      }
  )
}, [])

return (
  <Container>
    <Animated.View style={[brandStyle, { position: 'absolute' }]}>
      <BrandSvg width={80} height={50} />
    </Animated.View>

    <Animated.View style={[logoStyle, { position: 'absolute' }]}>
      <LogoSvg width={180} height={20} />
    </Animated.View>
  </Container>
)
}
