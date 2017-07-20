import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import RecentChatsScreen from './RecentChatsScreen';
import AllContactsScreen from './AllContactsScreen';
//import FlatListDemo from './FlatListDemo';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.RecentChatsScreen', () => RecentChatsScreen);
  Navigation.registerComponent('example.AllContactsScreen', () => AllContactsScreen);
  Navigation.registerComponent('example.HomeScreen', () => HomeScreen);
}