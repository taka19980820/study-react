import classes from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import Head from 'next/head'



export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main title="index" />
      <Footer />
    </div>
  )
}
