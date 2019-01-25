import React, { Component } from 'react';
import {View,StatusBar,KeyboardAvoidingView} from "react-native"
import {connect} from "react-redux";
import {Container} from "../components/container";
import { Logo } from "../components/logo";
import { InputWithButton } from '../components/TextInput';
import {ClearButton} from "../components/Button";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header"

import {changeCurrencyAmount,swapCurrency} from "../actions/currencies"
//const TEMP_BASE_CURRENCY = 'USD';
// const TEMP_QUOTE_CURRENCY = 'GBP';
// const TEMP_BASE_PRICE = '100';
// const TEMP_QUOTE_PRICE = '79.74';
// const TEMP_LAST_CONVERTED = new Date();
// const TEMP_CONVERSION_RATE = 0.79739;

class Home extends Component {
    handleChangeText = (text) => {
      console.log('change text',text);
      this.props.dispatch(changeCurrencyAmount(text))
    };
  
    handlePressBaseCurrency = () => {
      console.log('press base currency');
      const { navigation } = this.props;
      navigation.navigate('CurrencyList', { title: 'Base Currency',type:"base" });
    };
  
    handlePressQuoteCurrency = () => {
      console.log('press quote currency');
      const { navigation } = this.props;
      navigation.navigate('CurrencyList', { title: 'Quote Currency',type:"quote" });
    };
    handlePressClearButton = () => {
      console.log("Handel clear button on Press");
      this.props.dispatch(swapCurrency())
    }
    handleOptionsPress = () => {
      console.log('options press');
      const { navigation } = this.props;
      navigation.navigate('Options');
    };
    render() {
      const {
        isFetching,
        amount,
        conversionRate,
        baseCurrency,
        quoteCurrency,
        lastConvertedDate,
      } = this.props;
  
      let quotePrice = '...';
      if (!isFetching) {
        quotePrice = (amount * conversionRate).toFixed(2);
      }
      return (
        <Container>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Header onPress={this.handleOptionsPress} />
          <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            editable={false}
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
          />
          <LastConverted
          date={lastConvertedDate}
          base={this.props.baseCurrency}
          quote={this.props.quoteCurrency}
          conversionRate={conversionRate}
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
  

const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    isFetching: conversionSelector.isFetching,
  };


}

  export default   connect(mapStateToProps)(Home);


/*
 <KeyboardAvoidingView behavior="padding" ||  behavior="height" || behavior="position"> 
*/