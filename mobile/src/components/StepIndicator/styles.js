import styled from 'styled-components';

import { metrics, fonts, colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  padding: 0 ${metrics.base}px;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.smaller}px;
  color: ${colors.grayLight};
`;
