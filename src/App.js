import './App.css';
import Footer from './component/common/Footer/index';
import Header from "./component/common/Header/index";
import ProductCard from './ProductCard/index';
import MainDetails from './MainDetails/index';
import  {IndexContext} from "./../src/Context/context"
import { useEffect, useState } from 'react';
import data from './data/data.json';
import Cards from './component/common/Cards/Cards';



function App() {
  const [product,setProduct]= useState([])
  const [cartList, setCartList] = useState ([]);
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState (0);
  const [checkTotal, setCheckTotal] = useState(false);
  const [filterValue, setFilterValue] = useState ("ALL");
  const [orderValue, setOrderValue] = useState ("asc");
  const [dataLength, setDataLength] = useState (0);

  useEffect(() => {
     const copyProducts = [...product];
     data.map((item) => {
       copyProducts.push(item)
       data.amount = 0
       data.total = 0
     });
     setProduct(copyProducts);
    
  }, []);

function calculateTotal(){ 
    let total = 0;
    cartList.forEach((item) => (total += !item.total));
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
  }

   function closeModal(){
    setShowModal(false)
  }

    function addToCart(id){
    const copyProducts = [...product]
    const index = copyProducts.findIndex(item=>item.id===id)
    const added = copyProducts[index]
    added.amount = !added.amount + 1
    added.total = added.amount * parseFloat(added.price);
    if(!cartList.includes(added))setCartList([...cartList,added])
  
    copyProducts[index] = added;
    setProduct(copyProducts)
    setCheckTotal(!checkTotal)
  }

 

  function removeHandler(id){
    const copyProducts = [...product]
    const index = copyProducts.findIndex(item=>item.id===id)
    const addedCart = copyProducts[index]
    addedCart.amount = !addedCart.amount - 1
    addedCart.total = addedCart.amount * parseFloat(addedCart.price);
    if(addedCart.amount === 0){
      const editedCart = cartList.filter(item=>item.id !== id)
      setCartList(editedCart)
    }
    copyProducts[index] = addedCart;
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

        <MainDetails />
        <ProductCard />
  
          <Cards />
       
        <Footer />
      </IndexContext.Provider>
    </>
  );
}

export default App;
