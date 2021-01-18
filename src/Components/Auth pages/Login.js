import React, { useState } from 'react';
import  { Link } from 'react-router-dom';
import '../../css/Login.css';
import '../../css/style.css';
import { useForm } from "react-hook-form";
//import { yupResolver } from '@hookform/resolvers';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
const LoginPage = (props)=>{

    const   pattern =  /[0-9]{11}/;
    const validationSchema = Yup.object().shape({
     
        Phone:  Yup.string().matches(pattern, 'Phone number is not valid'),// Yup.number().required('Phone Number is Required').typeError('Phone Number must be a number'),
        Password: Yup.string().required('Password is Required')
    });

        // functions to build form returned by useForm() hook
        const { register, handleSubmit, reset, errors } = useForm({
            resolver: yupResolver(validationSchema)
        });   

    const Submitvalidatedvalue = (data)=>{
      //////////////validation is successfill ---------
      alert(JSON.stringify(data));
      alert(data.Password)

    }

return(

    <div className="row body container mt-4"> 
    <div className="col-md-5"></div>
<div className="col-md-4">
  <div className="card">
    
 <h4 className="card-header text-center"> Login To Your Account</h4>
 <div className="card-body">
<form name="form"  onSubmit={handleSubmit(Submitvalidatedvalue)}>
<div className="form-group ">
<label htmlFor="">Phone Number</label>

<input type="text" name="Phone" ref={register} className={'form-control'+ (errors.Phone?' is-invalid':'')} placeholder="Enter Your Phone Number"/>

     <div className="help-block error ">{errors.Phone?.message}</div> 

</div>

<div className="form-group">

<label htmlFor="">Password </label>
    <input type ="password" ref={register} className={'form-control'+ (errors.Password?' is-invalid':'')} name="Password" />

     <div className="help-block error "> {errors.Password?.message}</div> 
</div>


<div className="form-group">
    <button className="btn btn-primary btn-block"> Login</button>
</div>

</form>

<Link to="/Register">New to Here ? Register</Link>
</div>

</div>
</div>
</div>
);

};


export default LoginPage;


