import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { metrics, fonts, colors } from '~/styles';

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 0 ${metrics.base}px;
  justify-content: center;
`;

export const BackIcon = styled(Icon)`
  color: ${colors.grayLight};
  font-size: ${fonts.regular}px;
`;
