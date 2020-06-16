import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import useSearchResults from '../hooks/useSearchResults'

const SearchScreen = () => {

    console.log('SearchScreen rendered')

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useSearchResults()

    return (
        <View style={styles.viewStyle}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => { term ? searchApi(term) : setResults([]) }}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'white',
        flex: 1
    }
});


export default SearchScreen;