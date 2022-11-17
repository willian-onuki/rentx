import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler'
import { Loading } from '../Loading';
import { Container, Title } from './styles';

interface Props extends RectButtonProps{
  title: string;
  type?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  type,
  enabled = true,
  loading = false,
  ...rest
}: Props) {
  return(
    <Container
      enabled={enabled}
      type={type}
      style={{opacity: enabled ? 1 : 0.5}}
      {...rest}
    >
      {loading ? <Loading type={type}/> : <Title>{title}</Title>}
    </Container>
  )
}
