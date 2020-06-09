import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { metrics, colors, fonts } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.grayLighter,
})`
  flex: 1;
  height: 50px;
  padding: ${metrics.base}px;
  border-radius: ${metrics.baseRadius}px;
  background-color: #fff;
  border-width: 1px;
  border-color: ${colors.grayLighter};
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  margin-right: ${metrics.base}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: ${metrics.baseRadius}px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryWhite};
`;

export const ButtonIcon = styled(Icon)`
  font-size: ${fonts.bigger}px;
  color: ${colors.primaryLight};
`;
