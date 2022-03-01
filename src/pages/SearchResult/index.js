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
        : <ListOfGifs gifs={gifs} />
    }</Fragment>
  )
}
