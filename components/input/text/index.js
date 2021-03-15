import cn from 'classnames'
import styles from './style.module.css'

export default function Text({ className, children }) {
  return (
    <input type="text" className={cn(styles.text, className)}>
    </input>
  )
}
