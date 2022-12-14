import { FlatList, FlatListProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_primary};
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-weight: ${({ theme }) => theme.fonts.primary_500};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.View`
  width: 108px;
  height: 12px;
`;

export const CarTotal = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})`
`;

export const MyCars = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 13px;
  right: 22px;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.main};
  border-radius: 30px;
`;
