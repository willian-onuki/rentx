import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

interface Props {
  type?: string;
}

export function Loading({type}: Props) {
  const theme = useTheme();

  return <ActivityIndicator size='large' color={type === 'success' ? theme.colors.background_primary : theme.colors.main} style={{
    flex: 1,
    padding: 11,
  }} />;
}
