import classes from './Headline.module.css'

export function Headline(props) {
  console.log(classes)
  return (
      <div>
        <h1 className={classes.title}>
            {props.title} page
        </h1>
        <p className={classes.description}>
          アイテムの数は{props.children}です
        </p>
        <button onClick={props.handleReduce}>減らす</button>
      </div>
  )
}
