import styled from 'styled-components';

import { metrics, colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: ${metrics.base}px;
  height: 50px;
  padding: ${metrics.base}px ${metrics.base * 2}px;
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.baseRadius * 2}px;
  background-color: ${colors.primaryDark};
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  text-transform: uppercase;
  font-size: ${fonts.regular}px;
  color: ${colors.primaryWhite};
`;
