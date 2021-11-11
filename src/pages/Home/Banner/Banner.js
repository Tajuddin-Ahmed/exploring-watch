import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ItemCarousel from './ItemCarousel';

const Banner = () => {
    const items = [
        {
            name: "Random Name #1",
            image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            image: 'https://media.istockphoto.com/photos/military-style-watch-picture-id650233226?s=2048x2048',
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            description: "Hello World!"
        }
    ]
    return (
        <Carousel style={{ width: '50%' }}>
            {
                items.map((item, i) => <ItemCarousel key={i} item={item} />)
            }
        </Carousel>
    );
};

export default Banner;