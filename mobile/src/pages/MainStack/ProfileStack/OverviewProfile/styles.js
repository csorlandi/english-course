import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { metrics, colors, fonts } from '~/styles';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.grayWhite};
`;

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.base}px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  margin: ${metrics.base * 2}px 0;
`;

export const UserInfoContainer = styled.View`
  flex: 1;
`;

export const UserName = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.bigger}px;
  color: ${colors.grayBlack};
`;

export const Description = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.small}px;
  color: ${colors.grayDark};
  margin-top: ${metrics.base / 2}px;
`;

export const ProfileImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const HistoryTitle = styled.Text`
  text-transform: uppercase;
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.small}px;
  color: ${colors.graySuperDark};
`;

export const HistoryListWrapperContainer = styled.View`
  margin: ${metrics.base}px 0;
`;

export const HistoryListContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})``;

export const HistoryItemContainer = styled.View`
  border-radius: ${metrics.baseRadius * 2}px;
  padding: ${metrics.base / 2}px;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.grayLighter};
  margin-right: ${metrics.base / 2}px;
`;

export const HistoryItemImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 108px;
  height: 108px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const HistoryItemTitle = styled.Text`
  font-family: 'Nunito-Regular';
  text-transform: uppercase;
  font-size: ${fonts.regular}px;
  margin-top: ${metrics.base / 2}px;
  color: ${colors.grayBlack};
`;

export const HistoryItemDate = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.smaller}px;
  color: ${colors.grayDark};
`;

export const OptionsItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding: ${metrics.base}px;
  align-items: center;
`;

export const OptionsItemLeftIcon = styled(Icon)`
  font-size: ${fonts.bigger}px;
  color: ${colors.graySuperDark};
`;

export const OptionsItemTitle = styled.Text`
  flex: 1;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.small}px;
  color: ${colors.graySuperDark};
  margin-left: ${metrics.base}px;
`;

export const OptionsItemRightIcon = styled(Icon)`
  font-size: ${fonts.regular}px;
  color: ${colors.grayLight};
`;
