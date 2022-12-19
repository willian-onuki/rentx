import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, IconContainer, InputForm } from './styles';

import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";
import { useTheme } from 'styled-components';

interface Props extends TextInputProps {
  value?: string;
}

export function InputPassword({
  value,
  ...rest
}: Props) {
  const theme = useTheme();

  const [shouldVisible, setShouldVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputOnFocused = () => {
    setIsFocused(true);
  };

  const handleInputOnBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name='lock'
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>
      <InputForm
        secureTextEntry={!shouldVisible}
        onFocus={handleInputOnFocused}
        onBlur={handleInputOnBlur}
        isFocused={isFocused}
        {...rest}
      />

      <BorderlessButton onPress={() => setShouldVisible(!shouldVisible)}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={shouldVisible ? 'eye-off' : 'eye'}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}
