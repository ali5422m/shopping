import React from "react";
import {useStyles} from "./footer.style";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from '@mui/system';



function Footer() {
     const classes = useStyles();
     const theme = createTheme();

  return (
    <Box sx={{marginTop:"3rem"}}>
      <ThemeProvider theme={theme}>
        <Typography className={classes.root}>All right is reserved</Typography>
      </ThemeProvider>
    </Box>
  );
}
export default Footer;
