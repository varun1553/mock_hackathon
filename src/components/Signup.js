import React from 'react';
// import {Form,Button,Container} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    let navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onFormSubmit =(userObj) => {
        console.log(userObj);
        navigate("../Signin", { replace: true });


    }
    
  return (
    

            <div className="">
                

                <form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)} >
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input className='form-control' {... register("name",{required:true})} type="text" id="name"  />
                        {errors.name?.type=="required"&& <p className='text-danger'>*name is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <input className='form-control'  {... register("username",{required:true})}type="text" id="username"  />
                       {errors.username?.type=="required"&& <p className='text-danger'>*username is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mail">e-mail</label>
                        <input className='form-control'  {... register("mail",{required:true})}type="email" id="mail"  />
                        {errors.mail?.type=="required"&& <p className='text-danger'>*mail is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input className='form-control' {... register("password")} type="password" id="password"  />
                       
                    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="add">Address</label>
                        <input className='form-control' {... register("add",{required:true})} type="text" id="add"  />
                        {errors.add?.type=="required"&& <p className='text-danger'>*Address is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="num">PhoneNumber</label>
                        <input className='form-control'  {... register("num",{required:true})}type="text" id="num"  />
                        {errors.num?.type=="required"&& <p className='text-danger'>*PhoneNumber is required</p>}
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-success d-block mx-auto">Submit</button>

                    </div>

                    
                </form>         

                <a href="./Signin" className="auth__help">
                    Already a user? 
                    <span className="auth__help-span" >Sign in</span>
                </a>
            </div>

        
  );
}

export default Signup;