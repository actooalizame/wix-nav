import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Catalogo',
      screen: 'example.Catalog', // this is a registered name for a screen
      icon: require('./screens/catalog.png'),
      selectedIcon: require('./screens/catalog.png'), // iOS only
      title: 'Catalogo'
    },
    {
      label: 'Locales',
      screen: 'example.Map',
      icon: require('./screens/map.png'),
      selectedIcon: require('./screens/map.png'), // iOS only
      title: 'Locales'
    },
    {
      label: 'Calculadora',
      screen: 'example.Search',
      icon: require('./screens/calculator.png'),
      selectedIcon: require('./screens/calculator.png'), // iOS only
      title: 'Busqueda'
    }
  ]
});