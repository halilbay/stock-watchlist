import React, {useState} from 'react'
import {Table, Typography} from 'antd'

const {Text} = Typography

const columns = [{title: 'Name', dataIndex: 'name'}]

const data = [
    {key: '1', name: "hebele"}
]
const StockTable = props => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            
        />
    )
}

export default StockTable