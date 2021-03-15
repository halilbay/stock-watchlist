import styles from './style.module.css'
import cn from 'classnames'

export default function Button({ className, onClick, children }) {
  return (
    <button
      className={cn(className, styles.baseButton)}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
