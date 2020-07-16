import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import RestaurantCell from './RestaurantCell'

const ResultsList = ({ results, navigation }) => {

    //console.log(results);

    return (
        <View style={styles.viewStyle}>
            <FlatList style={styles.listStyle}
                horizontal={false}
                data={results}
                keyExtractor={(result) => result.restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(
                                'RestaurantDetails',
                                {
                                    restaurant: item.restaurant
                                }
                            )
                        }}>
                            <RestaurantCell
                                restaurant={item.restaurant}
                            />
                        </TouchableOpacity>
                    )
                }}
                onEndReached={() => {

                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    listStyle: {
        marginHorizontal: 10,
        paddingBottom: 20
    }
});

export default withNavigation(ResultsList);