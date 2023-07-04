import classes from './Links.module.css'

export function Links({items}) {
  return (
        <div className={classes.grid}>
          {items.map((item, index) => {
            return (
              <a href={item.href} className={classes.card} key={item.href}>
                <h3>{item.title} &rarr;</h3>
                <p>{item.description}</p>
              </a>
            )
          })}
        </div>

  )
}
