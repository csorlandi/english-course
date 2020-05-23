import styled from 'styled-components';

import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: ${metrics.base}px;
`;

export const BackIcon = styled(Icon).attrs({
  name: 'chevron-left',
})`
  margin-right: ${metrics.base}px;
`;

export const Progress = styled(ProgressBar).attrs({
  height: 18,
  borderRadius: 9,
  progress: 1 / 3,
  color: colors.primaryLight,
  borderColor: colors.primaryLight,
  width: 250,
})``;

export const TitleContainer = styled.View`
  margin-top: ${metrics.base * 1.5}px;
  padding: 0 ${metrics.base}px;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.bigger};
  color: ${colors.primarySuperDark};
`;

export const Description = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.superSmall}px;
  margin-top: ${metrics.base / 8}px;
  color: ${colors.grayDark};
`;

export const OptionsContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: ${metrics.baseRadius * 2}px;
  border-width: 2px;
  border-color: ${({ color }) => color || colors.primary};
  align-items: center;
  justify-content: center;
  margin-left: ${({ first }) => (first ? 0 : metrics.base)}px;
`;

export const OptionIcon = styled(Icon).attrs({})`
  color: ${({ color }) => color || colors.primary};
`;

export const OptionName = styled.Text`
  color: ${({ color }) => color || colors.primary};
  font-family: 'Nunito-Bold';
  font-size: ${fonts.regular}px;
  margin-top: ${metrics.base}px;
`;
