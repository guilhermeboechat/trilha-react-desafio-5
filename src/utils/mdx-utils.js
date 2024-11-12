import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    const {data} = await api.get('/posts');
    const post = data.filter( i => i.id === id)
    if (post) return post[0]
    return {
    }
}