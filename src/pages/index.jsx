import classes from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'



export default function Home() {
  const [count, setCount] = useState(1);
  // let count = 1;
  const handleClick = useCallback(() => {
    if(count < 10) {
      setCount(count => count + 1);
    }
  }, [count]);

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
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main title="index" />
      <Footer />
    </div>
  )
}
