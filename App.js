import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import MealsScreen from './screens/meals';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import AuthLoading from "./screens/AuthLoading";
import Modal from './screens/modal';

const OnBoardingNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
}, {
  initialRouteName: 'Login'
})
const AppNavigator = createStackNavigator({
  Meals: {
    screen: MealsScreen
  }
}, {
  initialRouteName: 'Meals'
})
const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal: Modal,
}, {
  modo: 'modal',
  headerMode: 'none',
})

const BaseStack = createSwitchNavigator({
  AuthLoading,
  OnBoarding: OnBoardingNavigator,
  Root: RootStack,
}, {
  initialRouteName: 'AuthLoading'
})

export default createAppContainer(BaseStack)