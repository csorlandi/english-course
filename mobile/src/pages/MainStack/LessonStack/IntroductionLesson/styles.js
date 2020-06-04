import styled from 'styled-components';

import { metrics, colors, fonts } from '~/styles';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.grayWhite};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${metrics.base * 2}px;
`;

export const Cover = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 187px;
  height: 187px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.giant}px;
  text-transform: uppercase;
  margin: ${metrics.base}px 0;
  color: ${colors.primarySuperDark};
`;

export const Description = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.small}px;
  color: ${colors.grayDark};
  margin: 0 ${metrics.base * 2}px;
  text-align: center;
`;

export const Br = styled.View`
  height: ${fonts.small}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: ${metrics.base * 2}px;
  height: 50px;
  padding: ${metrics.base}px ${metrics.base * 2}px;
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.baseRadius * 2}px;
  background-color: ${colors.primaryDark};
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: ${fonts.regular}px;
  color: ${colors.primaryWhite};
  text-transform: uppercase;
`;
