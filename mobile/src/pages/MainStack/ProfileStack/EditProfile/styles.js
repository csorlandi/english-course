import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, metrics, fonts } from '~/styles';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.grayWhite};
`;

export const Container = styled.View`
  flex: 1;
`;

export const ImageContainer = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  height: ${metrics.screenHeight * 0.4}px;
  justify-content: space-between;
`;

export const BackButtonContainer = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: ${metrics.base}px;
  margin-right: ${metrics.base}px;
`;

export const BackButtonIcon = styled(Icon)`
  font-size: ${fonts.giant}px;
  color: ${colors.graySuperDark};
`;

export const ChangeImageButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.primaryWhite};
  padding: ${metrics.base}px;
  align-items: center;
  border-top-right-radius: ${metrics.baseRadius * 2}px;
  align-self: baseline;
`;

export const ChangeImageButtonIcon = styled(Icon)`
  color: ${colors.primaryDark};
  font-size: ${fonts.superBig}px;
`;

export const ChangeImageButtonText = styled.Text`
  margin-left: ${metrics.base / 2}px;
  font-size: ${fonts.regular}px;
  font-family: 'Nunito-Regular';
  color: ${colors.primaryDark};
`;

export const UserDataContainer = styled.View`
  flex: 1;
  padding: 0 ${metrics.base}px;
`;

export const UserDataLine = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grayLighter};
  padding: ${metrics.base}px 0;
  align-items: center;
`;

export const UserDataLabel = styled.Text`
  flex: 1;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.grayBlack};
`;

export const UserDataValue = styled.Text`
  margin-right: ${metrics.base}px;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.grayLight};
`;

export const UserDataRightIcon = styled(Icon)`
  font-size: ${fonts.regular}px;
  color: ${colors.grayLight};
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin: ${metrics.base}px;
  background-color: ${colors.primaryDark};
  padding: ${metrics.base}px 0;
  border-radius: ${metrics.baseRadius * 2}px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: ${fonts.regular}px;
  color: ${colors.primaryWhite};
`;
