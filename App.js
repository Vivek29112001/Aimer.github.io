/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView,StyleSheet,Text} from 'react-native';
import SignInScreen from './src/screens/SigninScreen/SignInScreen';
import SignUpScreen from './src/screens/SignupScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen /> */}
      {/* <SignUpScreen/> */}
      <ConfirmEmailScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor: '#FFD6EC',
  }
});

export default App;
