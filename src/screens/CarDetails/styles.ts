import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImage = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const DataSheetGrid = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-left: 8px;
`;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Car = styled.View`

`;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const Rent = styled.View`

`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
`;

export const About = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;
  line-height: ${RFValue(25)}px;
  margin-top: 23px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  background: ${({ theme }) => theme.colors.background_primary};
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
