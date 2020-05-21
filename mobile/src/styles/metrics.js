import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  base: 16,
  baseRadius: 8,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
