import { StatusBar } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import CurrencyList from '../screens/CurrencyList';
import Options from "../screens/Options"
import Themes from "../screens/Themes" 

const HeaderStack = createStackNavigator({
  Home:{
    screen: Home,
      navigationOptions: {
        header: () => null,
      },
  },
  Options:{
    screen:Options,
    headerTitle:"Options"
  },
  Themes:{
    screen:Themes,
    headerTitle:"Themes"
    
  }
})
const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  }
})

const RootStack = createStackNavigator(
  {
    Home: HeaderStack,
    CurrencyList:CurrencyListStack,
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode:"none"
  },
);

const App = createAppContainer(RootStack);

export default App;