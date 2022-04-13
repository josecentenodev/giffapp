import React from 'react'
import useGlobalGifs from 'hooks/useGlobalGifs'
import Gif from 'components/Gif'

export default function Detail({params}) {
    const {id} = params
    const gifs = useGlobalGifs()

    const gif = gifs.find(singleGif => singleGif.id === id)
    console.log(gifs)

  return (
    <Gif {...gif} />
  )
}
