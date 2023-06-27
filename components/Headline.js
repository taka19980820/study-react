import styles from '../styles/Home.module.css'

export function Headline(props) {
  console.log(props)
  return (
      <div>
        <p className={styles.description}>
          Get started by editing{' '}
          {props.children}
        </p>
      </div>
  )
}
