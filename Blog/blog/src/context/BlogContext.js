import createDataContext from "./createDataContext";
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {

    switch (action.type) {
        case 'getBlogPosts':
            return action.payload

        case 'addBlogPost':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 9999),
                    title: action.payload.title,
                    content: action.payload.content,
                }
            ];
        case 'editBlogPost':
            return state.map((blogPost) => {
                return blogPost.id == action.payload.id ? action.payload : blogPost
            })
        case 'deleteBlogPost':

            const arr = state.filter(blogPost => blogPost.id !== action.payload)

            return arr
        default:
            return state
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts')

        dispatch({ type: 'getBlogPosts', payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callBack) => {

        await jsonServer.post('/blogposts',{title, content})
        callBack();
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callBack) => {
        await jsonServer.put(`/blogposts/${id}`,{title, content})
        callBack();
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id, callBack) => {
        try {
            await jsonServer.delete(`/blogposts/${id}`)
            callBack()
        } catch(error) {
            console.log(error)
        }       
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
    []
)