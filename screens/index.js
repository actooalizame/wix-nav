import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import Catalog from './Catalog';
import Map from './Map';
import Search from './Search';
//import FlatListDemo from './FlatListDemo';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.Map', () => Map);
  Navigation.registerComponent('example.Search', () => Search);
  Navigation.registerComponent('example.Catalog', () => Catalog);
}