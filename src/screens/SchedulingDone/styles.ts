import { FlatList, FlatListProps } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarScheduled } from '.';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  height: 273px;
  width: 100%;
  background: ${({ theme }) => theme.colors.header};
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_primary};
  margin-top: 39px;
`;

export const HeaderSubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.background_primary};
  margin-top: 18px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const ScheuduleQuantity = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 18px;
`;

export const Quantity = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  margin-top: 18px;
`;

export const CarList = styled(FlatList as new (props: FlatListProps<CarScheduled>) => FlatList<CarScheduled>).attrs({
  contentContainerStyle: {
    padding: 16,
  },
  showsVerticalScrollIndicator: false,
})``

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: ${({ theme }) => theme.colors.background_secondary};
  margin-top: -10px;
  margin-bottom: 16px;
`;


export const Title = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  text-transform: uppercase;
`;

export const DateScheduled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Start = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
`;

export const End = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
`;
