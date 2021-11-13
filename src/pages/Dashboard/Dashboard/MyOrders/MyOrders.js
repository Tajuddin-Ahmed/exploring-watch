import React, { useEffect, useState } from 'react';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://secure-beach-46076.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])
    const handleDelete = (id) => {
        const url = `https://secure-beach-46076.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Successfully');
                    const remainingService = orders.filter(service => service._id !== id);
                    setOrders(remainingService);
                }
            })
    }
    return (
        <>
            <h2>My Orders</h2>
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <table style={{ border: '1px solid black', borderCollapse: "collapse", padding: '20px', textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', borderCollapse: "collapse", padding: '20px' }}>Product Name</th>
                            <th style={{ border: '1px solid black', borderCollapse: "collapse", padding: '20px' }}>Description</th>
                            <th style={{ border: '1px solid black', borderCollapse: "collapse", padding: '20px' }}>Price</th>
                            <th style={{ border: '1px solid black', borderCollapse: "collapse", padding: '20px' }}>Action</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <tbody>
                            <tr>
                                <td style={{ border: '1px solid black', borderCollapse: "collapse", padding: '20px' }}>{order.productName}</td>
                                <td style={{ border: '1px solid black', borderCollapse: "collapse", padding: '20px' }}>{order.description}</td>
                                <td style={{ border: '1px solid black', borderCollapse: "collapse", padding: '20px' }}>£{order.price}</td>
                                <td style={{ border: '1px solid black', borderCollapse: "collapse", padding: '20px' }}> <button onClick={() => handleDelete(order._id)}>delete</button> </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </>
    )
};

export default MyOrders;