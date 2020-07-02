import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, metrics, fonts } from '~/styles';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primaryLighter};
`;

export const Container = styled.View`
  flex: 1;
`;

export const BackButtonContainer = styled.TouchableOpacity`
  padding: ${metrics.base}px;
`;

export const BackButtonIcon = styled(Icon)`
  font-size: ${fonts.bigger}px;
  color: ${colors.grayWhite};
`;

export const Title = styled.Text`
  padding: 0 ${metrics.base}px;
  margin-top: ${metrics.base * 2}px;
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.superBig}px;
  color: ${colors.grayWhite};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0 ${metrics.base}px;
  justify-content: center;
`;

export const OptionsListContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const colorPicker = (state) => {
  switch (state) {
    case 'selected':
      return colors.primaryLight;
    case 'correct':
      return colors.successLighter;
    case 'wrong':
      return colors.dangerLighter;
    default:
      return colors.grayWhite;
  }
};

const optionWidth = (metrics.screenWidth - 48) / 2;

export const OptionContainer = styled.TouchableOpacity`
  width: ${optionWidth}px;
  height: ${optionWidth / 2.04375}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ state }) => colorPicker(state)};
  border-radius: ${metrics.baseRadius * 2}px;
  margin-bottom: ${metrics.base}px;
`;

export const OptionText = styled.Text`
  color: ${({ state }) => (state ? colors.grayWhite : colors.primary)};
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: 65px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  border-top-left-radius: ${metrics.baseRadius * 2}px;
  border-top-right-radius: ${metrics.baseRadius * 2}px;
`;

export const ButtonText = styled.Text`
  text-transform: uppercase;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.grayWhite};
`;
