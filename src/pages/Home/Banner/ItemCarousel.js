import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
const ItemCarousel = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
        }} >
            <Card sx={{
                maxWidth: 600,
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={props.item.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Wonderful Watch
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default ItemCarousel;