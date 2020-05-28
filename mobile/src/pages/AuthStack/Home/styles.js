import styled from 'styled-components';

import { Platform } from 'react-native';

import { colors, fonts, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${metrics.base}px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 204px;
  height: 127px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  margin-top: ${metrics.base}px;
  font-size: ${fonts.superBig}px;
  color: ${colors.primary};
`;

export const Description = styled.Text`
  font-family: 'Nunito-Regular';
  margin-top: ${metrics.base}px;
  font-size: ${fonts.regular}px;
  color: ${colors.grayDark};
  text-align: center;
  padding: 0 ${metrics.base}px;
`;

export const ButtonsContainer = styled.View`
  padding: 0 ${metrics.base}px;
  padding-bottom: ${Platform.select({
    ios: 0,
    android: metrics.base,
  })}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: ${metrics.base}px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.baseRadius * 2}px;
  background-color: ${({ filled }) =>
    filled ? colors.primaryDark : colors.transparent};
  border-width: ${({ filled }) => (filled ? 0 : 1)}px;
  border-color: ${({ filled }) =>
    filled ? colors.transparent : colors.primaryDark};
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  text-transform: uppercase;
  font-size: ${fonts.regular}px;
  color: ${({ filled }) => (filled ? colors.primaryWhite : colors.primaryDark)};
`;
