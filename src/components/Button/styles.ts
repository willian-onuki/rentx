import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps{
  color: string;
}

interface TitleProps {
  light?: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  padding: 19px;
  background: ${({ color }) => color};
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Title = styled.Text<TitleProps>`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme, light }) => light ? theme.colors.title : theme.colors.shape};
`;
