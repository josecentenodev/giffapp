import React, {useEffect, useRef} from 'react'

export default function useTitle({title}) {
    const prevTitle = useRef(document.title)
    
    useEffect(() => {
        const previousTitle = prevTitle.current
        document.title = `${title} | Gif App by josecentenodev`;

        return () => document.title = previousTitle
    }, [title])
}
