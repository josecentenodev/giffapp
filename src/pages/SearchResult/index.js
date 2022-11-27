import React from 'react'//, useEffect, useState } from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import Spinner from '../../components/Spinner'
import useNearScreen from 'hooks/useNearScreen'
// import getGifs from '../../services/getGifs'
import { useRef, useEffect, useCallback } from 'react'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
// import useTitle from 'hooks/useTitle'


export default function SearchResults({params}) {
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({keyword})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
      externalRef: loading ? null : externalRef,
      once: false
    })
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

    // const handleNextPage = () => setPage(prevPage => prevPage + 1)
    const title = gifs ? `${gifs.length} resultados de ${keyword}` : '';
    // useTitle({title})

    const debounceHandleNextPage = useCallback(debounce(
      //() => console.log('next page'), 500
      () => setPage(prevPage => prevPage + 1), 200
    ),[])

    useEffect(function(){
      if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

  return (
    <>{
        loading
        ?
        <>
        <Helmet>
          <title>Cargando... | Gif App by josecentenodev</title>
        </Helmet>
        <Spinner /> 
        </> 
        : <>
        <Helmet>
          <title>{title} | Gif App by josecentenodev</title>
          <meta name="description" content={title}></meta>
        </Helmet>
            <h3 className='ml-10 py-2 text-green-100 font-bold opacity-70'>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            {/* <button className='block mx-auto text-green-100 p-3 bg-green-700 rounded-sm' onClick={handleNextPage}>Get More Gifs</button> */}
            <div id='visor' ref={externalRef}></div>
          </>
    }</>
  )
}
