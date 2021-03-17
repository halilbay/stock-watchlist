import React, { useState } from 'react'
import { Modal, Button, Form, Input } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

const AddStock = (props) => {
  const [form] = Form.useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [stockName, setStockName] = useState('')

  const { addWatchList } = props
  const handleAdd = () => {
    addWatchList(stockName)
    setIsModalVisible(false)
  }

  const handleClose = () => {
    setIsModalVisible(false)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }
  return (
    <>
      <Button icon={<PlusCircleOutlined />} onClick={showModal}>
        Add Stock
      </Button>
      <Modal
        title="Add Stock to WatchList"
        visible={isModalVisible}
        onCancel={handleClose}
        okText="Add"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields()
              handleAdd(values)
            })
            .catch((info) => {
              console.log('Validate Failed:', info)
            })
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public'
          }}
        >
          <Form.Item
            name="stock"
            label="Stock Name"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!'
              }
            ]}
          >
            <Input
              value={stockName}
              onChange={(e) => setStockName(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddStock
