import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Reviews from '../Reviews/Reviews';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/watches/home')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <h2>Exploring Products</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map(product => <Grid key={product._id} item xs={2} sm={4} md={4}>
                    <Card sx={{ maxWidth: 400, textAlign: "center" }}>
                        <CardMedia
                            component="img"
                            style={{ width: '100%' }}
                            height='400'
                            image={product.img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description.substring(0, 300)}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Price: £{product.price}
                            </Typography>
                        </CardContent>
                        <Link style={{ textDecoration: 'none' }} sx={{ textAlign: 'center', m: 1, }} to="/purchase">
                            <Button sx={{ textAlign: 'center' }} variant="contained" size="small">Buy Now</Button>
                        </Link>
                    </Card>
                </Grid>)}
            </Grid>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;