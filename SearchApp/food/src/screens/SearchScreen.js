import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import zomato from '../apis/zomotoApi'
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

const SearchScreen = () => {

    console.log('SearchScreen rendered')

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await zomato.get('/search', {
                params: {
                    q: searchTerm
                }
            })
            {term ? null : setTerm(searchTerm)}
            setResults(response.data.restaurants)
            setErrorMessage('')
        } catch (err) {
            setErrorMessage('something went wrong')
        }
    }

    useEffect(() => {
        searchApi('Italian')
    }, [])

    return (
        <View style={styles.viewStyle}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => {term ? searchApi(term) : setResults([]) }}
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