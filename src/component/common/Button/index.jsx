import { Button } from '@material-ui/core'
import {styles} from "./button.style"
import React from 'react'

function ButtonCard({ title, onClick }) {
  return (
    <Button  onClick={onClick} style={styles.buttonCard}>
      {title}
    </Button>
  );
}

export default ButtonCard