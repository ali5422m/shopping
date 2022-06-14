import './App.css';
import Footer from './component/common/Footer/index';
import Header from "./component/common/Header/index";
import  {IndexContext} from "./../src/Context/context"
import { useEffect, useState } from 'react';
import data from './data/data.json';
import Cards from './component/common/Cards/Cards';
import { Box } from '@mui/system';
import { Grid, Container } from '@material-ui/core';
import Modal from './component/customs/Modal/index';
import _ from "lodash";
import Products from './component/customs/Products/index';


function App() {
  const [product,setProduct]= useState([])
  const [cartList, setCartList] = useState ([]);
  const [total, setTotal] = useState (0);
  const [checkTotal, setCheckTotal] = useState(false);
  const [clickedProduct, setClickedProduct] = useState(product[0]);
   const [showModal, setShowModal] = useState(false);
  const [filterValue, setFilterValue] = useState("ALL");
  const [orderValue, setOrderValue] = useState("asc");
  const [dataLength, setDataLength] = useState (0);

  useEffect(() => {
    const copyProducts = [...data];
    copyProducts.forEach((item) => {
      // copyProducts.push(item);
      item.amount = 0;
      item.total = 0;
    });
    setProduct(copyProducts);
    setClickedProduct(copyProducts[0]);
  }, []);

function calculateTotal(){ 
    let total = 0;
    cartList.forEach((item) => (total += item.total));
    setTotal(parseFloat(total.toFixed(2)))
  }

useEffect(() => {
  calculateTotal();
}, [checkTotal]);

 function changeFilter(value){
   setFilterValue(value);
 }

 function changeOrder(value) {
   setOrderValue(value);
 }

   function showModalHandler(product) {
    setShowModal(true)
    setClickedProduct(product);
  }

   function closeModal(){
    setShowModal(false)
  }

    function addToCart(id){
    const copyProducts = [...product]
    const index = copyProducts.findIndex(item=>item.id===id)
    const added = copyProducts[index]
    added.amount = added.amount + 1
    added.total = added.amount * parseFloat(added.price);
    if(!cartList.includes(added)){
        setCartList([...cartList, added]);
        console.log(added)
    }
    copyProducts[index] = added;
    setProduct(copyProducts)
    setCheckTotal(!checkTotal)
  }

 

  function removeHandler(id){
    const copyProducts = [...product]
    const index = copyProducts.findIndex(item=>item.id===id)
    const added = copyProducts[index]
    added.amount = added.amount - 1
    added.total = added.amount * parseFloat(added.price);
    if(added.amount === 0){
      const editedCart = cartList.filter(item=>item.id !== id)
      setCartList(editedCart)
    }
  
    copyProducts[index] = added;
    setProduct(copyProducts)
    setCheckTotal(!checkTotal)
  }

  return (
    <>
      <IndexContext.Provider
        value={{
          product,
          addToCart,
          removeHandler,
          cartList,
          closeModal,
          showModalHandler,
          total,
          filterValue,
          changeFilter,
          orderValue,
          changeOrder,
          setDataLength,
          dataLength,
        }}
      >
        <Header />
        <Box sx={styles.main}>
          <Container sx={{ flex: 1 }}>
            <Grid container justifyContent="center">
              <Grid item xs={12} lg={9}>
                <Products />
              </Grid>
              <Grid item xs={12} sm={5} lg={3}>
                <Cards />
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </Box>
        {showModal && <Modal product={clickedProduct} />}
      </IndexContext.Provider>
    </>
  );
}


const styles ={
  main:{
    width:"100%",
    height:"100%",
    display:"flex",
    flexDirection:"column",
  }
}

export default App;
