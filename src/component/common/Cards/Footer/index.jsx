
import React, { useContext } from "react";

import { Box, Typography } from "@mui/material";
import { IndexContext } from "../../../../Context/context";

import ButtonCard from '../../Button/index';

function Footer({toggleForm}) {
    const {total} = useContext(IndexContext);
  return (
    <Box sx={styles.footer} className="animation-tb">
      <Typography>Total: ${total}</Typography>
      <ButtonCard onClick={toggleForm} title="Proceed" />
    </Box>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pr: { xs: 0, md: 5 },
    pl: 1,
    pb: { xs: 1, lg: 0 },
  },
};
export default Footer