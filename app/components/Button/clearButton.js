import React from "react";
import {View,Image,Text,TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";


const clearButton = ({text,onPress}) => (
    <TouchableOpacity style = {styles.conatiner}onPress={onPress}>
      <View style={styles.wrapper}>
          <Image style={styles.icon} resizeMode="contain" source={require("./images/icon.png")}/>
          <Text style={styles.text}>
              {text}
          </Text>
      </View>
    </TouchableOpacity>
    
)

export default clearButton;