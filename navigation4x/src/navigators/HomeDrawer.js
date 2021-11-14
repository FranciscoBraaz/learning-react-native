import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomDrawer from '../components/CustomDrawer';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';

const HomeDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Perfil: {
      screen: Perfil,
    },
  },
  {
    contentComponent: props => <CustomDrawer {...props} />,
  },
);

export default HomeDrawer;
