import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.header};
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  height: ${hp('33%')}px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 28px;
  justify-content: center;
  align-items: center;
  height: ${hp('33%')}px;
`;

export const Title = styled.Text`
  padding-top: 40px;
  text-align: center;
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Text = styled.Text`
  padding-top: 16px;
  text-align: center;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(25)}px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: center;
  height: ${hp('33%')}px;
  margin-top: 80px;
`;

export const Button = styled(RectButton)`
  background: ${({ theme }) => theme.colors.shape_dark};
`;

export const ButtonTitle = styled.Text`
  font-size: ${RFValue(15)}px;

  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};

  padding: 19px 25px;
`;
