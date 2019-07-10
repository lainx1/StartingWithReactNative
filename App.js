import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banana from './Banana';

export default function App() {
  return (
    <Banana/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
