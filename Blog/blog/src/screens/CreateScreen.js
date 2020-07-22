import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const { addBlogPost } = useContext(BlogContext)

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Enter Title:</Text>
            <TextInput
                style={styles.inputStyle}
                value={title}
                onChangeText={(text) => { setTitle(text) }}
            />

            <Text style={styles.titleStyle}>Enter Content:</Text>
            <TextInput
                style={styles.inputStyle}
                value={content}
                onChangeText={(text) => { setContent(text) }}
            />
            <Button title='Add Blog Post'
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index')
                    })
                }} />
        </View >
    )
}

CreateScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Create Blog Post'
    };
}


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'lightgrey',
        flex: 1,
        padding: 10
    },
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 10
    },
    titleStyle: {
        fontSize: 16,
        marginHorizontal: 10,
        marginTop: 10
    }
})

export default CreateScreen;