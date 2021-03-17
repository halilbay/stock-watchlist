import React, { useState } from 'react'
import useSWR, { SWRConfig } from 'swr'
import { fetcher } from '../lib/fetch'

import Table from './stock-table'

export default function StockLayout({ stockList }) {
  function DataList() {
    let dataList = []
    stockList.map((stock) => {
      const { data, error } = useSWR(`/api/stock/${stock}`, fetcher)
      dataList.push(data?.price)
    })

    return <Table dataList={dataList} />
  }

  return (
    <div>
      <SWRConfig
        value={{
          refreshInterval: 30 * 1000,
          fetcher: fetcher
        }}
      >
        <DataList />
      </SWRConfig>
    </div>
  )
}
