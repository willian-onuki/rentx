import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Title } from './styles';

interface Props extends RectButtonProps{
  title: string;
  type?: string;
  onPress: () => void;
}

export function Button({title, type, ...rest}: Props) {
  return(
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
