import React from 'react'
import { View, StyleSheet, Image } from 'react-native';

const RestaurantDetailsScreen = ({ restaurant }) => {

    const urlImage = <Image style={styles.imageStyle} source={{ uri: restaurant.thumb }} />
    const placeholderImage = <Image style={styles.imageStyle} source={require('../../assets/placeholder.jpg')} />

    return (
        <View style={styles.viewStyle}>
            {restaurant.thumb ? urlImage : placeholderImage}
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    imageStyle: {
        width: 250,
        height: 200,
        borderRadius: 4
    }
})

export default RestaurantDetailsScreen;