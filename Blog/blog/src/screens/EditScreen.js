import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {

    const { state } = useContext(BlogContext)

    const blogPost = state.find(
        (blogPost) => blogPost.id == navigation.getParam('id')
    )

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)

    const { editBlogPost } = useContext(BlogContext)

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Edit Title:</Text>
            <TextInput
                style={styles.inputStyle}
                value={title}
                onChangeText={(text) => { setTitle(text) }}
            />

            <Text style={styles.titleStyle}>Edit Content:</Text>
            <TextInput
                style={styles.inputStyle}
                value={content}
                onChangeText={(text) => { setContent(text) }}
            />
            <Button title='Save Blog Post'
                onPress={() => {
                    editBlogPost(blogPost.id, title, content, () => {
                        navigation.navigate('Index')
                    })
                }} />
        </View >
    )
}

EditScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'Edit Blog Post'
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

export default EditScreen;