const { ImagePickerIOS } = require("react-native");

import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const RestaurantCell = ({ restaurant }) => {

    //console.log(restaurant)

    if (!restaurant.thumb) {
        return null
    }

    const urlImage = <Image style={styles.imageStyle} source={{ uri: restaurant.thumb }} />
    const placeholderImage = <Image style={styles.imageStyle} source={require('../../assets/placeholder.jpg')} />
    const ratingText = <Text style={styles.ratingStyle}>Rating: {restaurant.user_rating.rating_text}</Text>
    const votesText = <Text style={styles.votesStyle}> , Votes: {restaurant.user_rating.votes}</Text>

    return (
        <View>
            <Text style={styles.titleStyle}>{restaurant.name}</Text>
            {restaurant.thumb ? urlImage : placeholderImage}
            <View style={styles.ratingContainerStyle}>
                {restaurant.user_rating.rating_text ? ratingText : null}
                {restaurant.user_rating.votes ? votesText : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10
    },
    ratingStyle: {
        fontSize: 14,
        fontWeight: '800'
    },
    imageStyle: {
        width: 250,
        height: 200,
        borderRadius: 4,
        marginTop: 10,
        marginBottom: 10
    },
    ratingContainerStyle: {
        flexDirection: 'row',
        marginBottom: 5
    },
    votesStyle: {
        fontSize: 14,
        fontWeight: '800'
    }
});


export default RestaurantCell;