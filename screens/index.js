import { Navigation } from 'react-native-navigation';

import Catalog from './Catalog';
import Map from './Map';
import Search from './Search';
import Items from './Items';
//import AllContactsScreen from './AllContactsScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.Map', () => Map);
  Navigation.registerComponent('example.Search', () => Search);
  Navigation.registerComponent('example.Catalog', () => Catalog);
  Navigation.registerComponent('example.Items', () => Items);
  //Navigation.registerComponent('example.AllContactsScreen', () => AllContactsScreen);
}