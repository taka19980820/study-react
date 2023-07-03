import classes from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'



export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [array, setArray] = useState([]);
  // let count = 1;
  const handleClick = useCallback(() => {
    if(count < 10) {
      setCount(count => count + 1);
    }
  }, [count]);

  const handleChange = useCallback(e => {
    setText(e.target.value)
  }, [])

  const handleDisplay = useCallback(() => {
    setIsShow((isShow => !isShow))
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

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>非表示</button>
      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (
            <li key={item}>{item}</li> 
          )
        })}
      </ul>
      <Main title="index" />
      <Footer />
    </div>
  )
}
