// import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';

// const MainNavigator = createStackNavigator(
//   {
//     Login: {
//       screen: Login,
//       params: {
//         title: 'Tela de login',
//       },
//     },
//     Welcome: {
//       screen: Welcome,
//       navigationOptions: {
//         headerRightContainerStyle: {
//           paddingRight: 10,
//         },
//       },
//     },
//   },
//   {
//     initialRouteName: 'Login',
//     defaultNavigationOptions: {
//       headerTitleContainerStyle: {
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//     },
//   },
// );

const MainNavigator = createBottomTabNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    Login: {
      screen: Login,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'blueviolet',
      inactiveTintColor: '#000',
    },
  },
);

export default MainNavigator;
