import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';

export default function TabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        let labelTitle = route.name;
        if (options.title !== undefined) {
          labelTitle = options.title;
        } else if (options.tabBarLabel !== undefined) {
          labelTitle = options.tabBarLabel;
        }

        function handlePress() {
          navigation.navigate(route.name);
        }

        if (route.name === 'TabHome') {
          return (
            <TouchableHighlight
              key={index}
              style={styles.homeTab}
              underlayColor="#eee"
              onPress={handlePress}>
              <Text style={{color: '#fff'}}>{labelTitle}</Text>
            </TouchableHighlight>
          );
        } else {
          return (
            <TouchableHighlight
              key={index}
              style={styles.tab}
              underlayColor="#eee"
              onPress={handlePress}>
              <Text>{labelTitle}</Text>
            </TouchableHighlight>
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 50,
  },
  homeTab: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'blueviolet',
    marginTop: -20,
  },
});
