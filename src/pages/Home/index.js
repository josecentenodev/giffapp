import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'wouter'

export default function Home() {
    const POPULAR_GIFS = ['Putin', 'Macri', 'Biden', 'WW3']
    const [keyword, setKeyword] = useState('')
    const handleSubmit = evt => {
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
  return (
    <Fragment>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} />
    </form>
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
