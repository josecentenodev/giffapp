import React from 'react'
import { Helmet } from 'react-helmet'

export default function NotFound () {
  return (
    <>
    <Helmet>
      404 | Gif App by josecentenodev
    </Helmet>
    <h1 className='text-green-200 text-6xl text-center block'>404 Error :(</h1>
    </>
  )
}
