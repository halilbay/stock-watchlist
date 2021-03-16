import React, { useState } from 'react'
import AddStock from './add-stock-modal'
import StockLayout from './stock-layout'
import Currency from './currency'

const Container = () => {
  const stockList = []
  return (
    <div>
      <Currency />
      <StockLayout stockList={stockList} />
      <AddStock />
    </div>
  )
}

export default Container
