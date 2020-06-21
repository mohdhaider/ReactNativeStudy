const { ImagePickerIOS } = require("react-native");

import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const RestaurantCell = ({ restaurant }) => {

    console.log(restaurant)

    return (
        <View>
            <Text style={styles.titleStyle}>{restaurant.name}</Text>
            <Text></Text>
            <Image style={styles.imageStyle}
                source={{ uri: restaurant.thumb }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16
    },
    imageStyle: {
        width: 250,
        height: 200,
        borderRadius: 4
    }
});


export default RestaurantCell;