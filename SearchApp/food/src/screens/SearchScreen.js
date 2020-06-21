import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearchResults from '../hooks/useSearchResults'
import ResultsList from './ResultsList'

const SearchScreen = () => {

    console.log('SearchScreen rendered')

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useSearchResults()

    return (
        <View style={styles.viewStyle}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => { term ? searchApi(term) : null }}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ResultsList
                results={results}
            />
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