import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, fonts, metrics } from '~/styles';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primarySuperDark};
`;

export const Container = styled.View`
  flex: 1;
  padding: ${metrics.base * 2}px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.superBig}px;
  color: ${colors.primaryWhite};
`;

export const TitleTagContainer = styled.View`
  margin-left: ${metrics.base / 2}px;
  padding: ${metrics.base / 4}px ${metrics.base / 2.5}px;
  background-color: ${colors.grayWhite};
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const TitleTag = styled.Text`
  text-transform: uppercase;
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.superSmall}px;
  color: ${colors.primarySuperDark};
`;

export const BenefitsListContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BenefitContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${metrics.base / 2}px 0;
`;

export const BenefitLeftIcon = styled(Icon)`
  font-size: ${fonts.regular}px;
  color: ${colors.primaryWhite};
`;

export const BenefitText = styled.Text`
  margin-left: ${metrics.base}px;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.primaryWhite};
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.successSuperLight};
  padding: ${metrics.base}px;
  border-radius: ${metrics.baseRadius * 2}px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.primarySuperDark};
`;

export const ButtonPrice = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: ${fonts.regular}px;
  color: ${colors.primarySuperDark};
`;
