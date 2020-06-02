import styled from 'styled-components';

import { metrics, colors, fonts } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.grayWhite};
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.bigger}px;
  color: ${colors.primarySuperDark};
  margin: 0 ${metrics.base}px;
`;

export const Description = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.superSmall}px;
  color: ${colors.grayRegular};
  margin: 0 ${metrics.base}px;
  margin-top: ${metrics.base / 2}px;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const PreferencesContainer = styled.View`
  padding: ${metrics.base}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const PreferenceContainer = styled.TouchableOpacity`
  width: 155px;
  height: 155px;
  border-radius: ${metrics.baseRadius * 2}px;
  border-width: 1.5px;
  border-color: ${colors.primarySuperDark};
  padding: ${metrics.base / 2}px;
  align-items: center;
  margin-bottom: ${metrics.base}px;
`;

export const PreferenceImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 139px;
  height: 101px;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const PreferenceTitle = styled.Text`
  font-size: ${fonts.regular}px;
  font-family: 'Nunito-Bold';
  color: ${colors.primary};
  margin-top: ${metrics.base / 2}px;
`;
