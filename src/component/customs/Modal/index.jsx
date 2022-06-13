import React,{useContext} from 'react'
import { IndexContext } from "../../../Context/context";
import ButtonCard from "../../common/Button";
import { Box, Typography } from "@mui/material";

function Modal({url,price,description,id}) {
    const {addToCart,closeModal} = useContext(IndexContext)
  return (
    <Box sx={styles.modal}>
      <Box sx={styles.productModal}>
        <Box component="img" src={url} sx={styles.cover} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <typography>{description}</typography>
          <Box component="button" onClick={closeModal}>
            X
          </Box>
        </Box>
        <Typography sx={{ mt: 3 }}>
          This is for all the latest trends, no matter who you are, where you’re
          from and what you’re up to. Exclusive to ASOS, our universal brand is
          here for you, and comes in all our fit ranges: ASOS Curve, Tall,
          Petite and Maternity. Created by us, styled by you.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
            px: 6,
            gap: 1,
          }}
        >
          <Typography sx={{ whiteSpace: "nowrap" }}>
            Price : ${price}
          </Typography>
          <ButtonCard
            onClick={() => {
              addToCart(id);
              closeModal();
            }}
            title="Add To Cart"
          />
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0%,100%,.534)",
    position: "fixed",
    top: 0,
    zIndex: "100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    px: 7,
    py: 3,
  },
  productModal: {
    bgcolor: "#fff",
    width: "100%",
    height: "100%",
    pl: 1,
    border: 1,
    display: "flex",
    position: "relative",
    overflow: "auto",
  },
  cover: {
    height: "100%",
    width: { sm: "35%", xs: "90%" },
    objectFit: "cover",
  },
};

export default Modal