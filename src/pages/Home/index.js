import React, {Fragment, useState, useEffect} from 'react'
import {Link, useLocation} from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function Home() {
    const POPULAR_GIFS = ['Putin', 'Macri', 'Biden', 'WW3']
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const{loading, gifs} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        // Navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
  return (
    <Fragment>
    <form className='text-center' onSubmit={handleSubmit}>
        <input placeholder='search a gif here...' className='p-1 rounded' onChange={handleChange} type="text" value={keyword} />
    </form>
    <h3 className='ml-10 py-2 text-green-100 font-bold opacity-70'>Búsqueda Reciente</h3>
    <ListOfGifs gifs={gifs}/>
    <h3 className='ml-10 py-2 text-green-100 font-bold opacity-70'>Los Gifs más Populares</h3>
    <ul>
        {POPULAR_GIFS.map((popularGif)=>(
            <li key={popularGif}>
                <Link to={`/search/${popularGif}`}>
                    Gifs de {popularGif}
                </Link>
            </li>
        ))}
    </ul>
    </Fragment>
  )
}
