import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Catalogo',
      screen: 'example.RecentChatsScreen', // this is a registered name for a screen
      icon: require('./screens/icon.png'),
      selectedIcon: require('./screens/icon.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Locales',
      screen: 'example.AllContactsScreen',
      icon: require('./screens/icon.png'),
      selectedIcon: require('./screens/icon.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});