import { Search, Cancel, Add } from '../icons'
import React, { useState } from 'react'
import styles from './style.module.css'

export default function StockModal({
  onModalClose = () => {},
  onClick = () => {},
  updateStockList = () => {}
}) {
  const onSubmit = () => {
    updateStockList((oldArray) => [...oldArray, newStock])
    setNewStock('')
    onModalClose()
  }

  const [newStock, setNewStock] = useState('')
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>Add Stock to WatchList</div>
        <div className={styles.body}>
          <Search />
          <input
            type="text"
            value={newStock}
            onChange={(e) => setNewStock(e.target.value)}
          />
        </div>
        <div className={styles.footer}>
          <Add onClick={onSubmit} />
          <Cancel onClick={onClick} />
        </div>
      </div>
    </div>
  )
}
