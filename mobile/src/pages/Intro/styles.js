import styled from 'styled-components';

import AppIntroSlider from 'react-native-app-intro-slider';

import { colors } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.grayWhite};
`;

export const Intro = styled(AppIntroSlider).attrs({
  dotStyle: {
    backgroundColor: colors.primaryWhite,
  },
  activeDotStyle: {
    backgroundColor: colors.primaryDark,
  },
})``;
