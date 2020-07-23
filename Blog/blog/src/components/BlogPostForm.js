import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

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
            <Button title='Save Blog Post'
                onPress={() => {
                    onSubmit(title, content)
                }} />
        </View >
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({

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

export default BlogPostForm;