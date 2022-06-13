import React, { useContext } from 'react'
import MediaCard from './../MediaCard/index';
import { Container, Grid } from '@material-ui/core';
import {IndexContext} from "../Context/context"


function ProductCard() {
  const {product} = useContext(IndexContext)
  return (
    <>
      <Container>
        <Grid container spacing={4} >
          {product.map((item) => (
            <Grid item key={item.id}>
              <MediaCard
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                url={item.url}
                description={item.description}
                price={item.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default ProductCard;