import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(BlogContext)

    const blogPost = state.find(
        (blogPost) => blogPost.id == navigation.getParam('id')
    )

    return (
        <View style={styles.viewStyle}>
            <Text>Title: {blogPost.title}</Text>
            <Text>Content: {blogPost.content}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    viewStyle: {

    },
    pencilStyle: {
        fontSize: 30,
        marginLeft: 20
    },
})

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight:
        <TouchableOpacity onPress={() => { navigation.navigate('Edit', {id: navigation.getParam('id')}) }}>
            <EvilIcons style={styles.pencilStyle} name='pencil' />
        </TouchableOpacity>,
        title:'Show'
    };
}


export default ShowScreen;