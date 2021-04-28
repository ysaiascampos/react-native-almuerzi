import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import MealsScreen from './screens/meals';
import Modal from './screens/modal';

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

export default createAppContainer(RootStack)