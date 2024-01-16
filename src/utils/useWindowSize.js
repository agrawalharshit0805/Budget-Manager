import {useEffect, useState} from 'react'

export const useWindowSize = () =>{
  const [size, setSize] = useState([window.innerWidth,0]) // to set the initial values and when updation is done setSize will update those values

  useEffect(()=>{
    const updateSize = ()=>{
        setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize',updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return {
    width: size[0],
    height: size[1]
  } 
} 

//this is going to be our hook and we are using this for orb animation 
//to be utilised to according to the window screen and making it more responsive