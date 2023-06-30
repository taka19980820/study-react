import classes from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import Head from 'next/head'
import { useCallback, useEffect } from 'react'



export default function Home() {

  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href)
  //   e.preventDefault();
  //   alert(1);
  // }, []);

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
      {/* <a 
        href="/about"
        onClick={handleClick}>
        ボタン
      </a> */}
      <Main title="index" />
      <Footer />
    </div>
  )
}
