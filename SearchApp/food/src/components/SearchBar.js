import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return (
    <View style = {styles.viewStyle}>
        <Feather name="search" style = {styles.iconStyle}/>
        <TextInput style = { styles.textInputStyle }
            placeholder="Search"
            value={term}            
            autoCapitalize='none'
            autoCorrect={false}            
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>        
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F0EEEE',
        height : 50, 
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row'       
    },
    textInputStyle: {
        marginHorizontal: 5,
        flex: 1,
        fontSize: 16
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginLeft: 2
    }
})

export default SearchBar;