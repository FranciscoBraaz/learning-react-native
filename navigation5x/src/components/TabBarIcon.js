import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function TabBarIcon({route}) {
  let imageSrc = null;
  let count = 3;

  switch (route.name) {
    case 'TabHome':
      imageSrc = require('../assets/home.png');
      break;
    case 'TabAbout':
      imageSrc = require('../assets/help.png');
      break;
  }

  return (
    <View>
      <Image source={imageSrc} style={{width: 24, height: 24}} />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    top: -3,
    right: -6,
    width: 15,
    height: 15,
    borderRadius: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
  },
});
