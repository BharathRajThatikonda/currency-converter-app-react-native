import React,{Component} from "react";
import { View,FlatList,Text,StatusBar  } from "react-native";
import currencies from "../data/currencies";
import {ListItem,Separator} from "../components/List"

const TEMP_CURRENT_CURRENCY = 'CAD';


class CurrencyList extends Component{
    handlePress = (index) => {
        console.log('row press',index);
        const { navigation } = this.props;
          navigation.goBack(null);
      };
    render(){
        return (
            <View styles={{flex:1,}}>
            <StatusBar translucent={false} barStyle="default" />
            <FlatList
                data={currencies}
                renderItem={({item,index})=>  { return ( <ListItem key={index} text={item}
                selected={item === TEMP_CURRENT_CURRENCY}
                onPress={() => this.handlePress(index)}
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


export default CurrencyList;