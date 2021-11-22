import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function AboutScreen() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>
        Bem-vindo {route.params?.name ?? 'Visitante'} !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
