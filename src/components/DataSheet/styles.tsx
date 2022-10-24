import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 109px;
  height: 92px;

  background: ${({ theme }) => theme.colors.background_primary};
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 8px;
  min-width: 30%;
  margin-right: 8px;
`;

export const Detail = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};

  margin-top: 14px;
`;
