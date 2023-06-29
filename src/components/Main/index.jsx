import classes from 'src/components/Main/Main.module.css'
import { Links } from 'src/components/Links'
import { Headline } from 'src/components/Headline'

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
