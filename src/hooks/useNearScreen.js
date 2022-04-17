import {useState, useEffect,useRef} from "react";
// Crear un hook a partir de algo que desarrollamos
export default function useNearScreen ({distance = '100px'} = {}) {
  const fromRef = useRef()

  const [isNearScreen, setIsNearScreen] = useState(false)

  useEffect(function(){
    let observer

    const onChange = (entries, observer) => {
      // console.log(entries)
      const element = entries[0]
      // console.log(element)
      if(element.isIntersecting) {
        setIsNearScreen(true)
        observer.disconnect()
      }
    }
    // Instalacion del polyfill que importaria intersection-observer en caso de no tener soporte el navegador para IntersectionObserver (caso de IE11)
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('intersection-observer')
    ).then(()=>{
        observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })
  
      observer.observe(fromRef.current)
    })
    
    

    return () => observer && observer.disconnect()
  })
  return {isNearScreen, fromRef}
}