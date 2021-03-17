import React, { useState } from 'react'
import { Table, Typography } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

const { Text } = Typography

const removeStockItem = (e) => {
  console.log(e)
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'symbol'
  },
  {
    title: 'Company Name',
    dataIndex: 'longName'
  },
  {
    title: 'Market Price',
    dataIndex: 'regularMarketPrice'
  },
  {
    title: 'Change',
    dataIndex: 'regularMarketChange'
  },
  {
    title: 'Delete',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => (
      <a onClick={removeStockItem}>
        <CloseOutlined />
      </a>
    )
  }
]

const StockTable = (props) => {
  const { dataList } = props
  console.log(dataList)
  return (
    <Table
      columns={columns}
      dataSource={dataList}
      pagination={false}
      bordered
      summary={(pageData) => {
        let totalMarketPrice = 0
        /*
        pageData.forEach(({ maxAge }) => {
          totalMarketPrice += maxAge
        })
*/
        return (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell>Total</Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalMarketPrice}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </>
        )
      }}
    />
  )
}

export default StockTable
