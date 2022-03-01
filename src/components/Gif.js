import React from 'react'
import {Link} from 'wouter'

export default function Gif({id, title, url}) {
  return (
    <Link to={`/gif/${id}`} className='flex items-center justify-center flex-col h-80 md:h-full border-2 border-green-700 bg-green-600'>
        <img src={url} alt={title} className="h-4 md:h-full object-contain flex-1"/>
        <h4 className='text-center text-slate-100'>{title}</h4>
    </Link>
  )
}
