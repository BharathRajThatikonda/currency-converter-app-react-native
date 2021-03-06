import React from "react";
import { View,Text,TouchableHighlight } from "react-native";
import Separator from "./Separator"
import Icon from "./Icon"
import styles from "./styles";


const ListItem = ({text,onPress,checkmark = true, selected = false, visible = true,customIcon = null,iconBackground}) => (
    <TouchableHighlight  onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style = {styles.row}>
            <Text style = {styles.text}>
                {text}
            </Text>
            {selected ? <Icon visible={visible} checkmark={checkmark} iconBackground={iconBackground} />
                : <Icon />}
            {customIcon}
        </View>

    </TouchableHighlight>
)

export default ListItem;