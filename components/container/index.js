import React, { useState } from 'react'
import Currency from '../currency'
import { Search, Add, Refresh } from '../icons'
import Dashboard from '../dashboard'
import Graphic from '../graphic'
import StockModal from '../stock-modal'

import styles from './style.module.css'
import { Button } from '../input'

export default function Container() {
  const [isShowModal, isShowModalSet] = useState(false)
  const onModalClose = () => isShowModalSet(false)

  const [stockList, stockListSet] = useState([])
  return (
    <div className={styles.container}>
      <Button onClick={() => isShowModalSet(true)}>
        <Add />
      </Button>
      <Currency />
      <Dashboard stockList={stockList}/>
      <Graphic />
      {isShowModal && (
        <StockModal onModalClose={onModalClose} onClick={onModalClose} updateStockList={stockListSet}/>
      )}
    </div>
  )
}
