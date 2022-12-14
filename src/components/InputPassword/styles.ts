import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  background: ${({ theme }) => theme.colors.background_secondary};

  align-items: center;
  justify-content: center;
  margin-right: 2px;

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
      border-bottom-style: solid;
    `};
`;

export const InputForm = styled(TextInput)<Props>`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_secondary};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
  padding: 0 23px;

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
      border-bottom-style: solid;
    `};
`;
