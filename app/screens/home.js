import React, { Component } from 'react';
import {View,StatusBar,KeyboardAvoidingView} from "react-native"

import {Container} from "../components/container";
import { Logo } from "../components/logo";
import { InputWithButton } from '../components/TextInput';
import {ClearButton} from "../components/Button";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header"

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;

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
    handlePressClearButton = () => {
      console.log("Handel clear button on Press");
    }
    handleOptionsPress = () => {
      console.log('options press');
    };
    render() {
      return (
        <Container>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Header onPress={this.handleOptionsPress} />
          <KeyboardAvoidingView behavior="padding">
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
          <LastConverted
          date={TEMP_LAST_CONVERTED}
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handlePressClearButton}
          />
          </KeyboardAvoidingView>
        </Container>
      );
    }
  }
  
  export default Home;


/*
 <KeyboardAvoidingView behavior="padding" ||  behavior="height" || behavior="position"> 

*/