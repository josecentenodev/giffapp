import React, {Fragment, useCallback, useEffect} from 'react'
import {Link, useLocation} from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'

export default function Home() {
    // const POPULAR_GIFS = ['Putin', 'Macri', 'Biden', 'WW3']
    const [path, pushLocation] = useLocation()
    const{loading, gifs} = useGifs()

    const handleSubmit = useCallback(({keyword}) => {
        // Navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    },[pushLocation])

  return (
    <Fragment>
    <SearchForm onSubmit={handleSubmit} />
    <ul>
        <TrendingSearches/>
    </ul>
    <h3 className='ml-10 py-2 text-green-100 font-bold opacity-70'>Búsqueda Reciente</h3>
    <ListOfGifs gifs={gifs}/>
    </Fragment>
  )
}
