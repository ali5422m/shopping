import React from 'react'
import {useStyles} from "./header.style"
import { ThemeProvider , createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

function Header() {
    const classes = useStyles();
    const theme = createTheme();
  return (
      <ThemeProvider theme={theme}>
            <Typography  className={classes.root}>React Shopping Cart</Typography>
      </ThemeProvider>
  )
}

export default Header