import { useState, useEffect } from "react";

const useResize = () => {
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});

    useEffect(() => {
        const resizer = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        }
        resizer();
        
        window.addEventListener("resize", resizer);
        return () => window.removeEventListener("resize", resizer);
    },[]);
    

    return windowSize;
}

export default useResize;