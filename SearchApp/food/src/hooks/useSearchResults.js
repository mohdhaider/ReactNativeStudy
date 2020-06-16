import React, { useState, useEffect } from 'react';
import zomato from '../apis/zomotoApi'

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await zomato.get('/search', {
                params: {
                    q: searchTerm
                }
            })
            setResults(response.data.restaurants)
            setErrorMessage('')
        } catch (err) {
            setErrorMessage('something went wrong')
        }
    }

    useEffect(() => {
        searchApi('Italian')
    }, [])

    return [searchApi, results, errorMessage];
};

