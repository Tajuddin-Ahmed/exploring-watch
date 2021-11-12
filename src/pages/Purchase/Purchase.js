import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const Purchase = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/orders', {
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
            <h2>Please Fill The Purchase Form</h2>
            <form style={{ margin: "30px 550px" }} onSubmit={handleSubmit(onSubmit)}>
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} defaultValue={user.displayName} {...register("name")} />
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} placeholder="Address" defaultValue="" {...register("address")} />
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} placeholder="City" defaultValue="" {...register("city")} />
                <input style={{ display: 'block', marginTop: '30px', width: "300px" }} placeholder="Phone" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Purchase;