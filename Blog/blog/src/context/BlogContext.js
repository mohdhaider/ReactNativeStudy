import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {

    switch (action.type) {
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
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 9999),
                    title: action.payload.title,
                    content: action.payload.content,
                }
            ];
        case 'deleteBlogPost':

            const arr = state.filter(blogPost => blogPost.id !== action.payload)

            return arr
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callBack) => {
        dispatch({ type: 'addBlogPost', payload: { title, content } });
        callBack();
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callBack) => {
        dispatch({ type: 'editBlogPost', payload: { title, content } });
        callBack();
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'deleteBlogPost', payload: id });
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    []
)