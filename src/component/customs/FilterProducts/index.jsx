import React,{useContext} from 'react'
import { IndexContext } from "../../../Context/context";
import MediaCard from '../MediaCard/index';
import { Grid } from "@mui/material";


function FilterProducts() {
    const {product,filterValue,orderValu,setDataLength} = useContext(IndexContext)
    const filtered = product.filter(item => item.size.includes === filterValue)
    setDataLength(filtered.length)
    const ordered =(filtered, ["price"], [orderValu === "Lowest" ? "Lowest" : "Highest"]);
  return (
    <>
        <Grid container spacing={2} >
        {ordered.map((item)=>(
            <Grid item key={item.id} sm={6} md={4} xs={12} >
            <MediaCard product={item} />
            </Grid>
        ))}
        </Grid>
    </>
  )
}

export default FilterProducts