import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './AddNew.css';

const AddNew = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user.email;
        console.log(data);
        axios.post(`https://guarded-reef-12809.herokuapp.com/destinations`, data)
            .then(res => {
                console.log(res);
                if(res.data.insertedId){
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    return (
        <>
            <div className="single_heading">
                <h1>Add New</h1>
                <p> <Link to="/home">home &#62;&#62;</Link> Add New</p>
            </div>

            <section className="add-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("title")}
                        placeholder="Title"
                        className="input-fill"
                    />
                    <br />

                    {/* <input
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className="input-fill"
                    />
                    <br /> */}
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Description"
                        className="input-fill"
                    />
                    <br />
                    <input
                        {...register("services_photo", { required: true })}
                        placeholder="Photo Url"
                        className="input-fill"
                    />
                    <br />
                    <input
                        {...register("days", { required: true })}
                        placeholder="Days-1"
                        className="input-fill"
                    />
                    <br />
                    <input
                        {...register("price", { required: true })}
                        placeholder="$ cost"
                        type="number"
                        className="input-fill"
                    />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" className="btn" />
                </form>
            </section>
        </>
    );
};

export default AddNew;