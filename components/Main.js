import classes from './Main.module.css'
import { Links } from './Links'
import { Headline } from './Headline'

export function Main(props) {
  return (
    <main className={classes.main}>
        <Headline title={props.title}>
            <code className={classes.code}>pages/{props.title}.js</code>
        </Headline>
        <Links />
    </main>
  )
}
