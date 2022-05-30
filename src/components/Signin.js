import React,{ useState } from 'react';
import {useForm} from "react-hook-form";

// import {Form,Button,Container} from 'react-bootstrap';


const Signin = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onFormSubmit =(userObj) => {
        console.log(userObj);
       

    }
    const [options,setoption]=useState('');

   const handleChange=(e)=>{
       setoption( e.target.value);
    }
  return (
    

            <div className="mb-3">
                {/* <div className='mb-3'>
                <div className='form-check'>
                <input type="radio" id="donor" name="options" className='form-check-input' {...register('Donor')} value="donor" onChange={handleChange}></input>
                <label htmlFor='donor' className='form-check-label'>Donor</label>
                </div>
                <div className='form-check'>
                <input type="radio" id="org" className='form-check-input' {...register('org')}value="org" onChange={handleChange}></input>
                <label htmlFor='organization' name="options" className='form-check-label'>Organization</label>
                </div>
                </div> */}
                

                <form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>

                    <div className="mb-3">
                    <div className='mb-3'>
                <div className='form-check'>
                <input type="radio" id="donor" name="options" className='form-check-input' {...register('Donor')} value="donor" onChange={handleChange} ></input>
                <label htmlFor='donor' className='form-check-label'>Donor</label>
                </div>
                <div className='form-check'>
                <input type="radio" id="org" className='form-check-input' {...register('org')} value="org" onChange={handleChange} ></input>
                <label htmlFor='organization' name="options" className='form-check-label'>Organization</label>
                </div>
                </div>
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