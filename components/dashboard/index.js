import React, { useState } from 'react'
import useSWR, { SWRConfig } from 'swr'
import { fetcher } from '../../lib/fetch'
import styles from './style.module.css'
import Table from '../table'

export default function Dashboard({ stockList }) {
  function DataList() {
    let dataList = []
    stockList.map((stock) => {
      const { data, error } = useSWR(`/api/stock/${stock}`, fetcher)
      dataList.push(data?.price.exchange)
    })

    return <Table dataList />
  }

  return (
    <div className={styles.table}>
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
