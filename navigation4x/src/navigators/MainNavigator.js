import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';

const MainNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Welcome: {
    screen: Welcome,
  },
});

export default MainNavigator;
