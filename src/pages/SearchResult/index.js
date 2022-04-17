import React from 'react'
import { Fragment } from 'react' //, useEffect, useState } from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import Spinner from '../../components/Spinner'
// import getGifs from '../../services/getGifs'


export default function SearchResults({params}) {
    const {keyword} = params
    const {loading, gifs} = useGifs({keyword})
    // Esto esta comentado porque acá se implementó el custom hook useGifs
    // const [loading, setLoading] = useState(false)
    // const [gifs, setGifs] = useState([])
    
    // useEffect(function () {
    //     setLoading(true)
    //     getGifs({keyword})
    //     .then(gifs => {
    //         setGifs(gifs)
    //         setLoading(false)
    //     })
    // }, [keyword])
  return (
    <Fragment>{
        loading
        ? <Spinner /> 
        : <><h3 className='ml-10 py-2 text-green-100 font-bold opacity-70'>{decodeURI(keyword)}</h3><ListOfGifs gifs={gifs} /></>
    }</Fragment>
  )
}
