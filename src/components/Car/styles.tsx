import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  background: ${({ theme }) => theme.colors.background_secondary};

  width: 100%;
  height: ${RFValue(126)}px;

  padding: 24px;
  margin-bottom: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const CarInformation = styled.View`

`;

export const CarDetails = styled.View`
  margin-bottom: 16px;
`;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  text-transform: uppercase;
`;

export const CarName = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const Expense = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Rent = styled.View`
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
`;

export const Fuel = styled.View`
  margin-left: 24px;
  width: ${RFValue(15)}px;
  height: ${RFValue(18)}px;
`;

export const CarImage = styled.Image`
  width: 169px;
  height: 92px;
`;
