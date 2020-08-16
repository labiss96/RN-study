import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  render() {
    const goToMain = () => Actions.main({text: 'Hello world!'});
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text onPress={goToMain}>Login!</Text>
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