import { useEffect, useState } from 'react'

const useIsWidth = (mobileWidth = 550) => {
    const [isMobile,setIsMobile] = useState(window.innerWidth <= mobileWidth)
    useEffect(()=>{
        const handleResize = () => setIsMobile(window.innerWidth <= mobileWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[mobileWidth])
  return isMobile;
}

export default useIsWidth
