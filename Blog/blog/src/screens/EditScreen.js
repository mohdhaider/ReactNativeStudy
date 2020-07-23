import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {

    const { state } = useContext(BlogContext)

    const blogPost = state.find(
        (blogPost) => blogPost.id == navigation.getParam('id')
    )

    const { editBlogPost } = useContext(BlogContext)

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(blogPost.id, title, content, () => { navigation.pop() })
        }}
    />
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
    }
})

export default EditScreen;