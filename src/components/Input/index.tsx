import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, InputForm, IconContainer } from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

// Typing a Feather icon group, and get only icon name
interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {
  const theme = useTheme();

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
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>
      <InputForm
        onFocus={handleInputOnFocused}
        onBlur={handleInputOnBlur}
        {...rest}
        isFocused={isFocused}
      />
    </Container>
  );
}
