import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { List, ListItem, SearchBar, Header, Item } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import Autocomplete from 'react-native-autocomplete-input';
import SingleItem from './SingleItem';
import { Navigation } from 'react-native-navigation';

Navigation.registerComponent('example.SingleItem', () => SingleItem);


class Catalog extends Component {
  static navigatorStyle = {
    navBarTextFontSize: 18,
  };
  
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      query: ''
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
          query: ''
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  findData = (query) => {
    if(query === '') {
      return [];
    }

    const data = this.state.data;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return data.filter(item => item.name.first.search(regex) >= 0);  
  };

/*
  renderHeader = () => {
    const { query } = this.state;
    const items = this.findData(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <Header rounded>
        <Text>Search</Text>
     
      </Header>
    )
  };*/

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  

  render() {
    const { query } = this.state;
    const items = this.findData(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <View style={styles.container}>
        <Autocomplete
          //autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={items.length === 1 && comp(query, items[0].name.first) ? [] : items}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Busca por nombre de producto"
          renderItem={({ name }) => (
            <TouchableOpacity onPress={() => this.setState({ query: name.first })}>
              <Text style={styles.itemText}>
                {name.first} {name.last}
              </Text>
            </TouchableOpacity>
          )}
        />
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 40 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                onPress={() => this.props.navigator.push({
                  screen: 'example.SingleItem', // unique ID registered with Navigation.registerScreen
                  title: `${item.name.first} ${item.name.last}`, // navigation bar title of the pushed screen (optional)
                  passProps: {item}, // Object that will be passed as props to the pushed screen (optional)
                  animated: true, // does the push have transition animation or does it happen immediately (optional)
                  animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
                })}
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            //ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={20}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  itemText: {
    fontSize: 17,
    textAlign: 'center',
    margin: 2,
    zIndex: 2,
    borderBottomWidth: 1,
    borderColor: "#CED0CE"
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 25
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
});

export default Catalog;
