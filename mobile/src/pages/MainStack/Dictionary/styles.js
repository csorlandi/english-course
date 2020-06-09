import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { metrics, colors, fonts } from '~/styles';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.grayWhite};
`;

export const Container = styled.View`
  flex: 1;
`;

export const SearchContainer = styled.View`
  margin: 0 ${metrics.base}px;
`;

export const ListContainer = styled.ScrollView`
  flex: 1;
  margin-top: ${metrics.base}px;
  padding: 0 ${metrics.base}px;
`;

export const ListItem = styled.View`
  margin-bottom: ${metrics.base / 2}px;
  background-color: #fff;
  border-radius: ${metrics.baseRadius}px;
  border-width: 1px;
  border-color: ${colors.grayLighter};
  flex-direction: row;
  align-items: center;
`;

export const ItemIconButtonContainer = styled.TouchableOpacity`
  padding: ${metrics.base}px;
`;

export const ItemSoundIcon = styled(Icon)`
  color: ${colors.primary};
  font-size: ${fonts.bigger}px;
`;

export const ItemText = styled.Text`
  flex: 1;
  color: ${colors.graySuperDark};
  font-size: ${fonts.small}px;
  font-family: 'Nunito-Regular';
`;

export const ItemArrowIcon = styled(Icon)`
  color: ${colors.grayLight};
  font-size: ${fonts.regular}px;
`;
