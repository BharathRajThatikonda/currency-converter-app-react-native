import { StatusBar } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import CurrencyList from '../screens/CurrencyList';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);

const App = createAppContainer(RootStack);

export default App;