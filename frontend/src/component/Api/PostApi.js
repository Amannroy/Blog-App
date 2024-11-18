import axios from 'axios';

export const BasedUrl = 'http://localhost:5000/';
const addUrl = 'http://localhost:5000/api/posts';

export const createPost = (newPost) => axios.post(`${addUrl}/add`, newPost) 
export const getAllPosts = () => axios.get(`${addUrl}/view`)
export const getPostById = (id) => axios.get(`${addUrl}/view/${id}`)
export const deletePost = (id) => axios.delete(`${addUrl}/delete/${id}`)
export const updatePost = (id, updatePost) => axios.patch(`${addUrl}/update/${id}`, updatePost)