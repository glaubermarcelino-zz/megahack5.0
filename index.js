/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
import Cartoes from './src/pages/Cartoes/Index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Cartoes);
