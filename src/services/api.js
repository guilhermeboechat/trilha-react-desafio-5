import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

export const api  = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        apikey: process.env.API_KEY,
        authorization: process.env.AUTH
    }
})