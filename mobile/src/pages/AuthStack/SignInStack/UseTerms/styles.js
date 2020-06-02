import styled from 'styled-components';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.grayWhite};
`;

export const TextContainer = styled.ScrollView`
  flex: 1;
  padding: ${metrics.base}px;
`;

export const Terms = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.smaller}px;
  line-height: ${fonts.small}px;
  color: ${colors.graySuperDark};
`;
