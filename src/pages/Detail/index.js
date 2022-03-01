import React, {useContext} from 'react'
import GifContext from '../../context/GifsContext'
import Gif from '../../components/Gif'

export default function Detail({params}) {
    const {id} = params
    const {gifs} = useContext(GifContext)

    const gif = gifs.find(singleGif => singleGif.id === id)
    console.log(gifs)

  return (
    <Gif {...gif} />
  )
}
