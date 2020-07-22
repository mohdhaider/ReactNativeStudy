import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogPost } = useContext(BlogContext)

    /* 
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
      */

    return (
        <View style={styles.listStyle}>
            <FlatList
                data={state}
                keyExtractor={(post) => `${post.id}`}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.blogPostStyle}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Show', { id: item.id })
                                }}
                            >
                                <Text style={styles.title}>{item.title}</Text>
                            </TouchableOpacity>

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

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight:
            <TouchableOpacity onPress={() => { navigation.navigate('Create') }}>
                <Feather style={styles.plusIcon} name='plus' />
            </TouchableOpacity>,
        title:'Blog Posts'
    };
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
    },
    plusIcon: {
        fontSize: 30,
        marginLeft: 20
    }
})

export default IndexScreen;