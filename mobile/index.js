import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

require('react-native').unstable_enableLogBox();

AppRegistry.registerComponent(appName, () => App);
