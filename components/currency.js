import React from 'react'
import { Select } from 'antd'
import { Try, Usd, Eur, Gbp } from './icons'
const { Option } = Select
const Currency = () => {
  const handleChange = (value) => {
    console.log(value)
  }

  return (
    <Select defaultValue={false} style={{ width: 240 }} onChange={handleChange}>
      <Option value={false}>Select Currency</Option>
      <Option value="TRY">
        <Try />
        Turkish Lira
      </Option>
      <Option value="USD">
        <Usd />
        US Dollar
      </Option>
      <Option value="EUR">
        <Eur />
        Euro
      </Option>
      <Option value="GBP">
        <Gbp />
        Pound
      </Option>
    </Select>
  )
}

export default Currency
