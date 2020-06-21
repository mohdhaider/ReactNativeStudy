import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantCell from './RestaurantCell'

const ResultsList = ({ results }) => {

    //console.log(results);

    return (
        <View>
            <Text>Results List {results.length}</Text>
            <FlatList
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
            />
        </View>
    )
}

const styles = StyleSheet.create({
});

export default ResultsList;