import {useEffect, useState} from 'react'
import getGifs from '../services/getGifs'

export function useGifs({keyword} = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    
    useEffect(function () {
        setLoading(true)
        // Recupero la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({keyword: keywordToUse})
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // Guardo la keyword del localStorage
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword])

    return {loading, gifs}
}