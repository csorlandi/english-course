import styled from 'styled-components';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${metrics.base * 2}px;
`;

export const Cover = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 343px;
  height: 242px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.bigger}px;
  margin-top: ${metrics.base * 2}px;
  color: ${colors.primaryDarker};
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: ${metrics.base}px;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.grayRegular};
  text-align: center;
`;
