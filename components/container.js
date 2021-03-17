import React, { useState } from 'react'
import AddStock from './add-stock-modal'
import StockLayout from './stock-layout'
import Currency from './currency'

const Container = () => {
  const [stockList, setStockList] = useState([])
  const addWatchList = (stockName) => {
    setStockList([...stockList, stockName])
  }

  const removeStockItem = (index) => {}
  return (
    <div>
      <Currency />
      <AddStock addWatchList={addWatchList} />
      <StockLayout stockList={stockList} />
    </div>
  )
}

export default Container
