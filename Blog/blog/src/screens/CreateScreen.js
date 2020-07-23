import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(BlogContext)

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => { navigation.navigate('Index') })
    }}
    />
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
    }
})

export default CreateScreen;