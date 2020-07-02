import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, metrics, fonts } from '~/styles';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primarySuperDark};
`;

export const Container = styled.View`
  flex: 1;
`;

export const BackButtonContainer = styled.TouchableOpacity`
  padding: ${metrics.base}px;
`;

export const BackButtonIcon = styled(Icon)`
  font-size: ${fonts.bigger}px;
  color: ${colors.grayWhite};
`;

export const Image = styled(Icon)`
  font-size: ${fonts.giant * 2.5}px;
  color: ${colors.grayWhite};
  align-self: center;
`;

export const Title = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.primaryWhite};
  margin-top: ${metrics.base}px;
  align-self: center;
`;

export const Player = styled.Image.attrs({
  resizeMode: 'cover',
})`
  margin-top: ${metrics.base}px;
  align-self: center;
`;

export const ControlsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ControlsButtonContainer = styled.TouchableOpacity`
  padding: ${metrics.base}px;
`;

export const ControlsIcon = styled(Icon)`
  color: ${colors.grayWhite};
  font-size: ${fonts.bigger}px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${colors.primaryLighter};
`;

export const TranscriptionTitle = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${fonts.regular}px;
  color: ${colors.primaryDark};
  padding: ${metrics.base}px;
`;

export const TranscriptionTextScroll = styled.ScrollView`
  flex: 1;
  padding: 0 ${metrics.base}px;
`;

export const TranscriptionText = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.grayWhite};
  line-height: ${fonts.bigger + 2}px;
  margin-bottom: ${metrics.base}px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: 65px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  border-top-left-radius: ${metrics.baseRadius * 2}px;
  border-top-right-radius: ${metrics.baseRadius * 2}px;
`;

export const ButtonText = styled.Text`
  text-transform: uppercase;
  font-family: 'Nunito-Regular';
  font-size: ${fonts.regular}px;
  color: ${colors.grayWhite};
`;
