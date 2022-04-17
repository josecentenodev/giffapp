import React from 'react'
import {Link} from 'wouter'

export default function Gif({id, title, url}) {
  return (
    <Link to={`/gif/${id}`} className='md:w-full mx-auto flex items-center justify-center flex-col border-2 border-cyan-900 bg-indigo-900 max-w-lg'>
        <img src={url} alt={title} className="h-full"/>
        <h4 className='text-center text-slate-100'>{title}</h4>
    </Link>
  )
}
