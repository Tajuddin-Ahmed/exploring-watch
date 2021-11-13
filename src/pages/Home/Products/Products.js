import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://secure-beach-46076.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <h2>Our Products</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </Grid>
        </Box>
    );
};

export default Products;