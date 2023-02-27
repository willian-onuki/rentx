import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { ButtonTitle } from './styles';

interface Props extends RectButtonProps {
  active: boolean;
  title: string;
}

export function ButtonSwitchComponent({ active, title, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <ButtonTitle active={active}>{title}</ButtonTitle>
    </RectButton>
  );
}
