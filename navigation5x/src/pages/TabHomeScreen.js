import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Tela Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    marginBottom: 10,
  },
});
