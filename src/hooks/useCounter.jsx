import { useState, useCallback } from "react";


export const useCounter = () => {
    const [count, setCount] = useState(1);
    const [isShow, setIsShow] = useState(false);
  
    const handleClick = useCallback(() => {
      if(count < 10) {
        setCount(count => count + 1);
      }
    }, [count]);
  
    const handleDisplay = useCallback(() => {
      setIsShow((isShow => !isShow))
    }, [])
  
    return { count, isShow, handleClick, handleDisplay }
  }