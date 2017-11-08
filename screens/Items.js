import Meteor, {createContainer} from 'react-native-meteor';
import React from 'react';
import MeteorListViewComponent from './meteorListView';

Meteor.connect('ws://localhost:3000/websocket');//do this only once

export default Items = createContainer(ownProps => {
  const itemsHandle = Meteor.subscribe('items');
  return {
      itemsReady: itemsHandle.ready()
  };
}, MeteorListViewComponent);