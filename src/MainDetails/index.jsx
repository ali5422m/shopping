import React, { useContext } from "react";
import { Box } from '@mui/system';
import { useStyles } from "./mainDetails.style";
import { IndexContext } from "../Context/context";



function MainDetails() {
const { dataLength, changeFilter, changeOrder } = useContext(IndexContext);
    const classes = useStyles()

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "980px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
              width: "95%",
              borderBottom: "1px solid silver",
            }}
          >
            <Box>{dataLength} Products</Box>
            <Box sx={{ display: "flex" }}>
              <Box>Order</Box>
              <Box>
                <select name="price" onChange={(e)=>changeOrder(e.target.value)}>
                  <option value="Lowest"> Lowest</option>
                  <option value="Highest">Highest</option>
                </select>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box>Filter</Box>
              <Box>
                <select name="size" onChange={(e)=>changeFilter(e.target.value)}>
                  <option value="All"> All</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainDetails