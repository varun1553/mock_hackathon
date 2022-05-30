import React from 'react';
import {useForm} from "react-hook-form";

// import {Form,Button,Container} from 'react-bootstrap';


const Signin = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onFormSubmit =(userObj) => {
        console.log(userObj);
       

    }
  return (
    

            <div className="">
                

                <form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="username">UserName</label>
                        <input className='form-control' type="text"  {... register("username",{required:true})} id="username"  />
                        {errors.username?.type=="required"&& <p className='text-danger'>*username is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass">Password</label>
                        <input className='form-control' type="text" id="pass"  />

                    </div>

                    <div className="mb-3">
                        <button className="btn btn-success d-block mx-auto">Submit</button>

                    </div>
                </form>
            </div>
        ); 
   }
   export default Signin;