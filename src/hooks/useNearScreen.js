import {useState, useEffect,useRef} from "react";
// Crear un hook a partir de algo que desarrollamos
export default function useNearScreen ({distance = '100px', externalRef, once = true} = {}) {
  const fromRef = useRef()

  const [isNearScreen, setIsNearScreen] = useState(false)

  useEffect(function(){
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      // console.log(entries)
      const el = entries[0]
      // console.log(element)
      if(el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }
    // Instalacion del polyfill que importaria intersection-observer en caso de no tener soporte el navegador para IntersectionObserver (caso de IE11)
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined' 
        ? IntersectionObserver 
        : import('intersection-observer')
    ).then(()=>{
        observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })
  
      if(element) observer.observe(element)
    })
    
    

    return () => observer && observer.disconnect()
  })
  return {isNearScreen, fromRef}
}