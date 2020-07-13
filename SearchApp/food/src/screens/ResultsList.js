import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantCell from './RestaurantCell'

const ResultsList = ({ results }) => {

    //console.log(results);

    return (
        <View style={styles.viewStyle}>
            <FlatList style={styles.listStyle}
                horizontal={false}
                data={results}
                keyExtractor={(result) => result.restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <RestaurantCell
                            restaurant={item.restaurant}
                        />
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

export default ResultsList;