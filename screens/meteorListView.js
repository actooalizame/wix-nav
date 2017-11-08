import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Meteor, { connectMeteor, MeteorListView } from 'react-native-meteor';

class MeteorListViewComponent extends Component {


  renderRow(item) {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>{item.name}</Text>
        <TouchableOpacity onPress={() => Meteor.call('changeStatus', item._id, 'suggested')}>
          <Text style={[styles.rowText, styles.deleteText]}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { itemsReady } = this.props;
    if (!itemsReady) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        

        <MeteorListView
          collection="items"
          style={styles.container}
          selector={{status:'iddlee'}}
          options={{sort: {createdAt: -1}}}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

export default MeteorListViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCCCCC'
  },
  row: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCCCCC',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowText: {
    fontSize: 16
  },
  deleteText: {
    color: 'red',
    fontWeight: '700'
  }
});