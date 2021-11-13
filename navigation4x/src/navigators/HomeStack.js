import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  Perfil: {
    screen: Perfil,
  },
});

export default HomeStack;
