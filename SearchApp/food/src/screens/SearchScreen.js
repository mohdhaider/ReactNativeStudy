import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import zomato from '../apis/zomotoApi'

const SearchScreen = () => {

    console.log('SearchScreen rendered')

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async () => {

        try {
            const response = await zomato.get('/search', {
                params: {
                    q: term
                }
            })
            setResults(response.data.restaurants)
            setErrorMessage('')
        } catch (err) {
            setErrorMessage('something went wrong')
        }
    }
    
    return (
        <View style={styles.viewStyle}>

            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
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