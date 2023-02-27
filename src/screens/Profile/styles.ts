import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  height: 227px;
  width: 100%;
  background: ${({ theme }) => theme.colors.header};
  align-items: center;
  padding: 0 24px;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};
`;

export const ProfilePicture = styled.View`
  align-items: center;
  height: 180px;
  width: 180px;
  border-radius: 90px;
  margin-top: 47px;
  background: ${({ theme }) => theme.colors.line};
`;

export const Picture = styled.Image`
  height: 180px;
  width: 180px;
  border-radius: 90px;
`;

export const ButtonCamera = styled(RectButton)`
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 4px;
  right: 4px;

  background: ${({ theme }) => theme.colors.main};

  align-items: center;
  justify-content: center;
`;

export const SwitchableComponents = styled.View`
  margin-top: 122px;
  padding: 0 24px;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-color: ${({ theme }) => theme.colors.line};
  margin-bottom: 24px;
`;

export const Section = styled.View`
`;
