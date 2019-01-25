import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from 'react-redux';
import Home from "./screens/home";
import CurrencyList from "./screens/CurrencyList";
import Options from "./screens/Options"
import Themes from "./screens/Themes"
import { AlertProvider } from './components/Alert';
import store from "./config/store"

import Navigator from "./config/routes";
EStyleSheet.build({
 $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});

export default () => (
        <Provider store={store}>
                <AlertProvider><Navigator onNavigationStateChange={null} /></AlertProvider>
        </Provider>
       
)