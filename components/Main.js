import styles from '../styles/Home.module.css'
import { Links } from './Links'
import { Headline } from './Headline'

export function Main(props) {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
            {props.title} page
        </h1>

        <Headline>
            <code className={styles.code}>pages/{props.title}.js</code>
        </Headline>

        <Links />
    </main>
  )
}
