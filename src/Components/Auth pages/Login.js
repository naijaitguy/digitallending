import React, { useEffect, useState } from 'react';
import  { Link,  useLocation } from 'react-router-dom';
import '../../css/Login.css';
import '../../css/style.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { clearLoginErrorMessage, login, logout } from '../../Redux/Actions/Athentication.action';
import Dots from 'react-activity/lib/Dots';
import Squares from 'react-activity/lib/Squares';
import SweetAlert from 'react-bootstrap-sweetalert';
import 'react-activity/dist/react-activity.css';

const LoginPage = (props)=>{

    useEffect(()=>{
     const token = localStorage.getItem('userToken');
     if(token !== null){ dispatch(logout())}

    },[])
    const dispatch = useDispatch();
    const location = useLocation();
    const   pattern =  /[0-9]{11}/;
    const validationSchema = Yup.object().shape({
     
        Phone:  Yup.string().matches(pattern, 'Phone number is not valid'),// Yup.number().required('Phone Number is Required').typeError('Phone Number must be a number'),
        Password: Yup.string().required('Password is Required')
    });
 const [show, setShow]= useState(true);
        // functions to build form returned by useForm() hook
        const { register, handleSubmit, reset, errors } = useForm({
            resolver: yupResolver(validationSchema)
        });   
const confirm = ()=>{

    dispatch(clearLoginErrorMessage());
    setShow(false);
};
const cancle = () =>{
 
    dispatch(clearLoginErrorMessage());
    setShow(false);
};
        
        const errorMessage = useSelector(state=>state.auth.errorMessage)
        const loginError = useSelector(state=>state.auth.loginError);
        const loading = useSelector(state=>state.auth.loggingIn)
        const suceess = useSelector(state=>state.auth.authsuccess)
        const Submitvalidatedvalue = (data)=>{
      //////////////validation is successfill ---------

      const { from } = location.state || { from: { pathname: "/Home" } };
     dispatch(login(data.Phone,data.Password, from));

    }

return(

    <div className="row body container main-wrapper"> 
    <div className="col-md-5"></div>
<div className="col-md-4">
  <div className="card">
    
 <h4 className="card-header text-center"> Login To Your Account</h4>
 <div className="card-body">
 <SweetAlert
  success
  title="Successfull !"
  onConfirm={confirm}
  onCancel={cancle}
  timeout={2000}
  show={false}
>
  transaction successful
</SweetAlert>

<SweetAlert
  error
  title="Login Error !"
  onConfirm={confirm}
  onCancel={cancle}
  show={loginError}
>
  <span className="text-danger"> {errorMessage} </span> 
</SweetAlert>


<SweetAlert
  warning
  showCancel
  confirmBtnText="Yes, delete it!"
  confirmBtnBsStyle="danger"
  title="Are you sure?"
  onConfirm={confirm}
  onCancel={cancle}
  focusCancelBtn
  show={false}
>
 invalid username/password
</SweetAlert>
<div className={loading?"p-2":""}> 
    {loading? "Loading Please Wait    " : ""}
<Squares color="blue" size={32}  speed={1} animating={loading}/>
    </div> 
 
   { loginError?  <div className="alert alert-danger"> {errorMessage} </div>:'' }
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
    <button className="btn btn-primary btn-block">{loading?"Processing ":""}{ loading?  <Dots color="white" size={32}  speed={1} animating={loading}/>:"Login"} </button>
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


