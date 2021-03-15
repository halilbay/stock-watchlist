import React, { useState } from 'react'
import { fetcher } from '../../lib/fetch'
import useSWR from 'swr'
import styles from './style.module.css'

import { Search, Add, Refresh } from '../icons'
import { Button, Text } from '../input'

export default function SearchBar({}) {

  const [isModalOpen, isModalSet] = useState(false);
  const onClick = () => {}

  return (
    <div className={styles.buttonList}>
      <Button onClick={onClick}>
        <Add /> 
        Add
      </Button>
      |
      <Button>
        <Refresh />
        Refresh
      </Button>
    </div>
  )
}
