import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {List} from '../pages/List';
import {EditNote} from '../pages/EditNote';

const {Navigator, Screen} = createStackNavigator();

export function MainStack() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#fff',
      }}>
      <Screen name="List" component={List} />
      <Screen name="EditNote" component={EditNote} />
    </Navigator>
  );
}
