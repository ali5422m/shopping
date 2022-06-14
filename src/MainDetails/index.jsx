import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import {styles} from './mainDetails.style'
import { IndexContext } from "../Context/context";



function MainDetails() {
const { dataLength, changeFilter, changeOrder } = useContext(IndexContext);

  return (
          <Box sx={styles.header}>
            <Typography>{dataLength} Products</Typography>
            <Typography sx={{ display: "flex" ,gap: 1 }}>
              Order
                <select  onChange={(e)=>changeOrder(e.target.value)}>
                  <option value="asc"> Lowest</option>
                  <option value="desc">Highest</option>
                </select>
            </Typography>
            <Typography sx={{ display: "flex",gap:1}}>
              Filter
                <select  onChange={(e)=>changeFilter(e.target.value)}>
                  <option value="All"> All</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
            </Typography>
          </Box>
  );
}

export default MainDetails