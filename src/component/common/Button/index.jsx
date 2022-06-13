import { Button } from '@material-ui/core'
import {styles} from "./button.style"
import React from 'react'

function ButtonCard({title}) {
  return (
    <Button type="submit" style={styles.buttonCard}>{title}</Button>
  )
}

export default ButtonCard