import React,{Component} from "react";
import { View,FlatList,Text,StatusBar  } from "react-native";
import { connect } from  "react-redux";
import currencies from "../data/currencies";
import {ListItem,Separator} from "../components/List"
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';


class CurrencyList extends Component{
    handlePress = (currency) => {
        console.log('row press',currency);
        const { navigation, dispatch } = this.props;
        const { type } = navigation.state.params;
         if (type === 'base') {
          dispatch(changeBaseCurrency(currency));
         } else if (type === 'quote') {
           dispatch(changeQuoteCurrency(currency));
         }
          navigation.goBack(null);
      };
    render(){
        const { baseCurrency, quoteCurrency, navigation } = this.props;
            let comparisonCurrency = baseCurrency;
            if (navigation.state.params.type === 'quote') {
                comparisonCurrency = quoteCurrency;
            }
        return (
            <View styles={{flex:1,}}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList
                data={currencies}
                renderItem={({item,index})=>  { return ( <ListItem key={item} text={item}
                selected={item === TEMP_CURRENT_CURRENCY}
                onPress={() => this.handlePress(item)}
                />
                )}
            }
                keyExtractor={({item})=> item}
                ItemSeparatorComponent={Separator}
            />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
  });
export default connect(mapStateToProps)(CurrencyList);