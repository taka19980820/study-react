import classes from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import Head from 'next/head'


export default function Home(props) {
  // const {count, isShow, handleClick, handleDisplay} = useCounter();
  // const {text, array, handleChange, handleAdd} = useInputArray();
  // useBgLightBlue();
  console.log(props)
  const {count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd} = props;

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
