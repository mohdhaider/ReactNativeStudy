import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

    const [term , setTerm] = useState('')

    return <View style = { styles.viewStyle }>
         <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}  
            onTermSubmit={() => console.log('submitted new')}
         />
        <Text>Search Screen</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor: 'white',
        flex: 1
    }
});

export default SearchScreen;