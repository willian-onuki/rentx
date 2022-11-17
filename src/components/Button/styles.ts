import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
interface Props {
  type: string;
}

export const Container = styled(RectButton) <Props>`
  width: 100%;
  padding: 19px;
  background: ${({ theme, type }) => type === 'success' ? theme.colors.success : theme.colors.main};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
`;
