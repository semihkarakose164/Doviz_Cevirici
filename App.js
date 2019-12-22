/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,  
  StatusBar,  
} from 'react-native';
import Header from './src/components/header';
import Converter from './src/components/converter';

export default class App extends Component {
   
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <Header headerText='Currency Converter'/>
          <Converter></Converter>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#f3f3f3'
  },
});
