import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Rent = styled.View`
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;
  padding: 25px;
  background: ${({ theme }) => theme.colors.header};
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background_primary};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(34)}px;
  margin-top: 40px;
`;

export const Period = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`;


export const Field = styled.View`
  width: 30%;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  margin-bottom: 9px;
`;

export const Date = styled.Text<DateProps>`
  ${({ selected }) => !selected && css`
    border-bottom-width: 2px;
    border-color: ${({ theme }) => theme.colors.text};
    padding-bottom: 5px;
  `}
  color:  ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})`

`;

export const Footer = styled.View`
  padding: 24px;
`;
