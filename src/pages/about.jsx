import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import Head from 'next/head'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgLightBlue } from 'src/hooks/useBgLightBlue'

export default function About() {
  const {count, isShow, handleClick, handleDisplay} = useCounter();
  const {text, array, handleChange, handleAdd} = useInputArray();
  useBgLightBlue();

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
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
      <Main title="about" />
      <Footer />
    </div>
  )
}
