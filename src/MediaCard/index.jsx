import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { IndexContext } from "../Context/context";
import ButtonCard from "../component/common/Button";
import {styles} from "./card.style";
import { Box } from '@mui/system';


export default function MediaCard({ product }) {
  const { addToCart, showModalHandler } = useContext(IndexContext);

  return (
    <Box sx={styles.productItem} className="animation-tb">
      <Box
        component="img"
        src={product.url}
        sx={styles.img}
        onClick={() => showModalHandler(product)}
      />
      <Typography sx={{ textAlign: "center" }}>
        {product.description}
      </Typography>
      <Box sx={styles.footer}>
        <Typography component="span">$ {product.price}</Typography>
        <Box >
          <ButtonCard
            onClick={() => addToCart(product.id)}
            title="add to product"
          />
        </Box>
      </Box>
    </Box>
  );
}


