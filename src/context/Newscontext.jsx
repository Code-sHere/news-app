import { createContext, useContext, useState, useEffect } from "react";
import api from '../config/axios'

const Newscontext = createContext();

const NewscontextProvider = ({ children }) => {

    const [news, setnews] = useState([]);
    const [loading, setloading] = useState(false);

    const fetchNews = async (url = "/everything?q=all") => {

        setloading(true);

        try {
            const resdata = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`)
            setloading(false);
            return resdata.data;

        } catch (error) {
            console.log(error);
             setloading(false);
        }

    }

    const state = {
        news,
        setnews,
        fetchNews,
        loading
    }

    return (
        <Newscontext.Provider value={state}>
            {children}
        </Newscontext.Provider>
    )
}

const useNewsContext = () => {
    return useContext(Newscontext);
}

export { NewscontextProvider, useNewsContext }