const { ImagePickerIOS } = require("react-native");

import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const RestaurantCell = ({ restaurant }) => {

    //console.log(restaurant)

    const urlImage = <Image style={styles.imageStyle} source={{ uri: restaurant.thumb }} />
    const placeholderImage = <Image style={styles.imageStyle} source={require('../../assets/placeholder.jpg')} />
    const ratingText = <Text style={styles.ratingStyle}>{restaurant.user_rating.rating_text}</Text>

    return (
        <View>
            <Text></Text>
            <Text style={styles.titleStyle}>{restaurant.name}</Text>
            <Text></Text>
            {restaurant.thumb ? urlImage : placeholderImage}
            <Text></Text>
            {restaurant.user_rating.rating_text ? ratingText : null}
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    ratingStyle: {
        fontSize: 14,
        fontWeight: '500'
    },
    imageStyle: {
        width: 250,
        height: 200,
        borderRadius: 4
    }
});


export default RestaurantCell;