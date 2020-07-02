import styled from 'styled-components';

import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/FontAwesome';

import { metrics, colors, fonts } from '~/styles';

Icon.loadFont();

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.grayWhite};
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 ${metrics.base}px;
`;

export const Progress = styled(ProgressBar).attrs({
  width: null,
  height: metrics.base / 1.5,
  borderRadius: metrics.base / 0.75,
  color: colors.primaryLight,
  borderColor: colors.primaryLight,
  unfilledColor: colors.grayWhite,
})``;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.bigger}px;
  text-transform: uppercase;
  margin: ${metrics.base}px 0;
  color: ${colors.primarySuperDark};
`;

export const Description = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.smaller}px;
  color: ${colors.grayDark};
`;

export const Br = styled.View`
  height: ${fonts.smaller}px;
`;

export const ListContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

const colorPicker = (state) => {
  switch (state) {
    case 'success':
      return colors.success;
    case 'danger':
      return colors.danger;
    default:
      return colors.primarySuperDark;
  }
};

export const ListItemContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.base}px;
  margin-top: ${metrics.base}px;
  background-color: ${({ state }) => colorPicker(state)};
`;

export const ListItemLeftIcon = styled(Icon)`
  font-size: ${fonts.superBig}px;
  color: ${colors.grayWhite};
`;

export const ListItemText = styled.Text`
  flex: 1;
  margin: 0 ${metrics.base}px;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.small}px;
  color: ${colors.grayWhite};
`;

export const ListItemRightIcon = styled(Icon)`
  font-size: ${fonts.small}px;
  color: ${colors.grayWhite};
`;
