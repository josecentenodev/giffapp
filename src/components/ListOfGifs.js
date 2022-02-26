import React, { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

export default function ListOfGifs({params}) {
    const {keyword} = params
    const [gifs, setGifs] = useState([])
    useEffect(()=>{
      getGifs({keyword}).then(gifs => setGifs(gifs))
    }, [keyword])
    return (
        <div className='grid gap-y-4 py-4 sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-4'>
            {gifs.map(({id, title, url}) => 
            <Gif 
                key={id}
                id={id} 
                title={title} 
                url={url}
            />)}
    </div>
    )
}
