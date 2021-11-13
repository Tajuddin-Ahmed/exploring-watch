import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { useParams } from 'react-router';

const Purchase = () => {
    const [product, setProduct] = useState({});
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { productKey } = useParams();
    useEffect(() => {
        fetch(`https://secure-beach-46076.herokuapp.com/watches/${productKey}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);

            })
    }, [])

    const onSubmit = data => {
        console.log(data);
        fetch('https://secure-beach-46076.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('ordered processed successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <h2>First Click All field and  Fill Out Form</h2>
            <form style={{ margin: "30px 550px" }} onSubmit={handleSubmit(onSubmit)}>
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} defaultValue={user.displayName} {...register("name")} />
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} defaultValue={product.name} {...register("productName")} />
                <textarea style={{ display: 'block', marginTop: '30px', width: "300px" }} defaultValue={product.description} {...register("description")} />
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} defaultValue={product.img} {...register("imageUrl")} />
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} defaultValue={product.price} {...register("price")} />
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} placeholder="Address" defaultValue="" {...register("address")} />
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} placeholder="City" defaultValue="" {...register("city")} />
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} placeholder="Phone" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Purchase;