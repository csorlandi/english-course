import styled from 'styled-components';

import { metrics, fonts, colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${metrics.base * 2}px;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 168px;
  height: 171px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  text-transform: uppercase;
  font-size: ${fonts.superBig}px;
  color: ${colors.primary};
  margin-top: ${metrics.base * 2}px;
`;

export const Tip = styled.Text`
  font-family: 'Nunito-Regular';
  text-align: center;
  font-size: ${fonts.bigger}px;
  color: ${colors.grayRegular};
  margin-top: ${metrics.base * 2}px;
`;
