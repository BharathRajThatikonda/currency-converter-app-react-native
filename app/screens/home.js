import React, { Component } from 'react';
import {View,StatusBar} from "react-native"

import {Container} from "../components/container";
import { Logo } from "../components/logo";
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
    handleChangeText = (text) => {
      console.log('change text',text);
    };
  
    handlePressBaseCurrency = () => {
      console.log('press base currency');
    };
  
    handlePressQuoteCurrency = () => {
      console.log('press quote currency');
    };
  
    render() {
      return (
        <Container>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            editable={false}
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            value={TEMP_QUOTE_PRICE}
          />
        </Container>
      );
    }
  }
  
  export default Home;


