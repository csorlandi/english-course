import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { metrics, colors, fonts } from '~/styles';

Icon.loadFont();

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

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.grayLight,
})`
  padding: 0 ${metrics.base}px;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.primary};
  height: 60px;
  align-self: stretch;
  border-left-width: 1.5px;
  border-right-width: 1.5px;
  border-top-width: 1.5px;
  border-bottom-width: ${({ first }) => (first ? 0 : 1.5)}px;
  border-top-left-radius: ${({ first }) =>
    first ? metrics.baseRadius * 2 : 0}px;
  border-top-right-radius: ${({ first }) =>
    first ? metrics.baseRadius * 2 : 0}px;
  border-bottom-left-radius: ${({ first }) =>
    first ? 0 : metrics.baseRadius * 2}px;
  border-bottom-right-radius: ${({ first }) =>
    first ? 0 : metrics.baseRadius * 2}px;
  border-color: ${colors.grayLighter};
`;

export const ForgotButtonContainer = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: ${metrics.base}px;
`;

export const ForgotButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  color: ${colors.primary};
  font-size: ${fonts.smaller}px;
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

export const DividerContainer = styled.View`
  align-self: stretch;
  align-items: center;
  margin-top: ${metrics.base}px;
  padding-top: ${fonts.small / 2}px;
`;

export const DividerLine = styled.View`
  border-top-width: 1px;
  border-color: ${colors.grayLighter};
  align-self: stretch;
`;

export const DividerText = styled.Text`
  background-color: ${colors.grayWhite};
  position: absolute;
  font-size: ${fonts.smaller}px;
  font-family: 'Nunito-Bold';
  padding: 0 ${metrics.base}px;
  line-height: ${fonts.small}px;
  color: ${colors.grayRegular};
`;

export const SocialButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: ${metrics.base}px;
`;

export const FacebookButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  background-color: ${colors.primary};
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-right: ${metrics.base}px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const FacebookButtonIcon = styled(Icon)`
  font-size: ${fonts.regular}px;
  color: ${colors.grayWhite};
`;

export const FacebookButtonText = styled.Text`
  margin-left: ${metrics.base / 2}px;
  font-family: 'Nunito-Bold';
  font-size: ${fonts.regular}px;
  color: ${colors.grayWhite};
`;

export const GoogleButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  background-color: ${colors.danger};
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const GoogleButtonIcon = styled(Icon)`
  font-size: ${fonts.regular}px;
  color: ${colors.grayWhite};
`;

export const GoogleButtonText = styled.Text`
  margin-left: ${metrics.base / 2}px;
  font-family: 'Nunito-Bold';
  font-size: ${fonts.regular}px;
  color: ${colors.grayWhite};
`;

export const UseTermsContainer = styled.TouchableOpacity`
  padding: ${metrics.base}px ${metrics.base * 2}px;
  align-self: stretch;
`;

export const UseTermsDescription = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.smaller}px;
  color: ${colors.grayDarker};
  text-align: center;
`;

export const UseTermsBold = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.smaller}px;
  color: ${colors.grayDarker};
`;
