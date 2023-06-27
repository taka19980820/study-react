import classes from './Headline.module.css'

export function Headline(props) {
  console.log(classes)
  return (
      <div>
        <h1 className={classes.title}>
            {props.title} page
        </h1>
        <p className={classes.description}>
          Get started by editing{' '}
          {props.children}
        </p>
      </div>
  )
}
