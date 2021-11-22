import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../pages/HomeScreen';
import {AboutScreen} from '../pages/AboutsScreen';

const {Navigator, Screen} = createStackNavigator();

export function MainStack() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'blueviolet',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      />
      <Screen
        name="Sobre"
        component={AboutScreen}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
    </Navigator>
  );
}
