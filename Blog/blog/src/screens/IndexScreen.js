import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {

    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)

    return (
        <View style={styles.listStyle}>
            <Button
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={(post) => `${post.id}`}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.blogPostStyle}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    deleteBlogPost(item.id)
                                }}
                            >
                                <Feather style={styles.icon} name='trash' />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    blogPostStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen;