import styled from 'styled-components';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.grayWhite};
`;

export const FormContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${metrics.base}px;
`;

export const Banner = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 250px;
  height: 178px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.regular}px;
  margin-top: ${metrics.base * 2}px;
  color: ${colors.primaryDarker};
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: ${metrics.base}px;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.smaller}px;
  color: ${colors.grayDark};
  text-align: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.grayLight,
})`
  padding: 0 ${metrics.base}px;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.primary};
  height: 60px;
  align-self: stretch;
  border-width: 1.5px;
  border-radius: ${metrics.baseRadius * 2}px;
  border-color: ${colors.grayLight};
  margin-top: ${metrics.base * 2}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  align-self: stretch;
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
  font-size: ${fonts.regular}px;
  color: ${colors.primaryWhite};
`;
