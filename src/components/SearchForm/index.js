import React, {useState} from 'react'

function SearchForm({onSubmit}) {
    const [keyword, setKeyword] = useState('')
    
    const handleSubmit = evt => {
        evt.preventDefault()
        // Navegar a otra ruta
        onSubmit({keyword})
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
  return (
    <form className='text-center flex justify-center' onSubmit={handleSubmit}>
    <button type='submit' className=' bg-green-400 p-1 rounded-l'>Search</button>
    <input placeholder='a gif here...' className='p-1 rounded-r' onChange={handleChange} type="text" value={keyword} />
</form>
  )
}


export default React.memo(SearchForm)