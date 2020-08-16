import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Main!</Text>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});