import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface ButtonProps {
  active: boolean;
}

export const ButtonTitle = styled.Text<ButtonProps>`
  padding-bottom: 14px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.text_detail};

  ${({ theme, active }) =>
    active &&
    css`
      font-family: ${({ theme }) => theme.fonts.secondary_600};
      color: ${({ theme }) => theme.colors.title};
      border-bottom-width: 3px;
      border-color: ${theme.colors.main};
    `}
`;
