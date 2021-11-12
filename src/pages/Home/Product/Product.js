import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({ product }) => {
    const { name, description, price, img } = product;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 400, textAlign: "center" }}>
                <CardMedia
                    component="img"
                    style={{ width: '100%' }}
                    height='400'
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.substring(0, 300)}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Price: £{price}
                    </Typography>
                </CardContent>
                {/* <CardActions > */}
                <Link style={{ textDecoration: 'none' }} sx={{ textAlign: 'center', m: 1 }} to="/purchase">
                    <Button sx={{ textAlign: 'center' }} variant="contained" size="small">Buy Now</Button>
                </Link>

                {/* </CardActions> */}
            </Card>
        </Grid>
    );
};

export default Product;