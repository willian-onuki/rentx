import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import { TextInput } from 'react-native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background_secondary};
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
  color: ${({ theme }) => theme.colors.header};
  padding: 0 23px;

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
      border-bottom-style: solid;
    `};
`;
