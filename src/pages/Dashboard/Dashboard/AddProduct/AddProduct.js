import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product Added successfully');
                    reset();
                }
            })
        console.log(data);
    };
    return (
        <div>
            <h2>Add New Product</h2>
            <div>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ width: "30%", margin: '10px 0' }} placeholder="Product Name" defaultValue="" {...register("name")} />
                    <br />
                    <textarea style={{ width: "30%", margin: '10px 0' }} placeholder="Description" defaultValue="" {...register("description", { required: true })} />
                    <br />
                    {errors.email && <span className="error">This field is required</span>}
                    <input style={{ width: "30%", margin: '10px 0' }} placeholder="Price" defaultValue="" {...register("price")} />
                    <br />
                    <input style={{ width: "30%", margin: '10px 0' }} placeholder="Image url" defaultValue="" {...register("img")} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;