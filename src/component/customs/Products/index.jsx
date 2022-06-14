import React from 'react'
import { Box, Container } from "@mui/system";
import MainDetails from '../../../MainDetails';
import FilterProducts from '../FilterProducts';

function Products() {
  return (
    <Container>
        <Box>
           <MainDetails />
            <FilterProducts />
        </Box>
    </Container>
  )
}

export default Products