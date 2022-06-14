import React,{useContext} from 'react'
import { Box, Typography } from "@mui/material";
import { IndexContext } from "../../../Context/context";  
import ButtonCard from './../../common/Button/index';

function CardCart({ product }) {
  const { removeHandler } = useContext(IndexContext);
  return (
    <Box sx={styles.card} className="animation-lr">
      <Box sx={styles.cover} component="img" src={product.url} />
      <Box sx={styles.details}>
        <Typography sx={{ textAlign: "center" }}>
          {product.description}
        </Typography>
        <Box sx={styles.footer}>
          <Box sx={styles.footerElems}>
            <Typography>
              ${product.price} x {product.amount}
            </Typography>
            <Box sx={styles.button}>
              <ButtonCard
                onClick={() => removeHandler(product.id)}
                title="remove"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    width: "100%",
    py: 2,
    display: "flex",
    gap: 3,
    alignItems: "center",
  },
  cover: {
    width: "20%",
    height: "30%",
    objectFit: "contain",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    mt: 2,
  },
  footerElems: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    position: "relative",
    left: "20%",
  },
  button: {
    backgroundColor: "red",
  },
};

export default CardCart