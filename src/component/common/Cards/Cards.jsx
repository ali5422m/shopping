import React,{useContext,useState} from 'react'
import { IndexContext } from "../../../Context/context";
import CardCart from './../../customs/CardCart/index';
import { Box, Typography } from "@mui/material";
import Form from './../../customs/Form/index';
import ButtonCard from './../Button/index';



function Cards({toggleForm}) {
    const {cartList,total} = useContext(IndexContext)
    const [showForm,setShowForm] = useState(false)

    function toggleForm(){
        setShowForm(true)
    }
    function checkOut(){
        alert("will be sent")
        setShowForm(false)
    }
  return (
    <>
      <Box sx={styles.header}>
        <Typography>
          {!cartList.length
            ? "Cart is Empty"
            : `You have ${cartList.length} in the Cart`}
        </Typography>
      </Box>
      <Box sx={styles.footer} >
        <Typography>Total: ${total}</Typography>
        <ButtonCard onclick={toggleForm} title="Proceed" />
      </Box>
      {cartList.map((item) => (
        <CardCart key={item.id} product={item} />
      ))}
      {cartList.length ? toggleForm={toggleForm}: null}
      {showForm && <Form checkOut={checkOut} />}
    </>
  );
}

const styles = {
  header: {
    borderBottom: 1,
    py: 1,
    textAlign: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pr: { xs: 0, md: 5 },
    pl: 1,
    pb: { xs: 1, lg: 0 },
  },
};

export default Cards