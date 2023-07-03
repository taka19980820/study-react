import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback(e => {
    setText(e.target.value)
  }, [])

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if(prevArray.some(item => item === text)) {
        alert('同じ要素が存在するよ');
        return prevArray;
      }
      return [...prevArray, text];
    })
  }, [text])

  return { text, array, handleChange, handleAdd }
}