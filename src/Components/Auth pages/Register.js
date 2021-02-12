import { Link } from "react-router-dom"
import '../../css/style.css';
import "../../css/register.css"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { CLEARMESSAGE, FindUserByPhoneandEmail, Register, RemoveOtp, SendOtptouser, ValidateUserOtp } from "../../Redux/Actions/Register.action";
import Dots from 'react-activity/lib/Dots';
import Squares from 'react-activity/lib/Squares';
import SweetAlert from 'react-bootstrap-sweetalert';
import 'react-activity/dist/react-activity.css';
import { useEffect, useState } from "react";
import { logout } from "../../Redux/Actions/Athentication.action";
const RegisterPage =  (prpos) =>{

    const dispatch = useDispatch();
    useEffect(()=>{
        const token = localStorage.getItem('userToken');
        if(token !== null){ dispatch(logout())}
   
       },[])
    const loading = useSelector(state=>state.reg.loading);
    const otpsentsuccess = useSelector(state=>state.reg.otpsentsuccess);
    const regError = useSelector(state=>state.reg.register_fail);
    const phonecheckerror = useSelector(state=>state.reg.phonecheckerror);
    const regErrorMgs = useSelector(state=>state.reg.errormessage);
    const success = useSelector(state=>state.reg.success); //deleteotp_suc
    const Otpvalidation_error = useSelector(state=>state.reg.Otpvalidation_error);
   const [PhoneNumber , setPhoneNumber] = useState('')
   const [Email , setEmail] = useState('')
   const [FirstName , setFirstName] = useState('')
   const [LastName , setLastName] = useState('')
   const [Password , setPassword] = useState('')
   const [Otp , setotp] = useState('')


   const Confirmotperror = ()=>{
 
     dispatch(RemoveOtp(PhoneNumber,Otp))
     dispatch(CLEARMESSAGE());
     
   }
    const confirm = ()=>{

        dispatch(CLEARMESSAGE());
        
    };
    const cancle = () =>{

        dispatch(CLEARMESSAGE());
      
    };
        
    const   pattern =  /[0-9]{11}/;
    const validationSchema = Yup.object().shape({
     
        Phone:  Yup.string().required('Phone Number is required').matches(pattern, 'Phone number is not valid'),// Yup.number().required('Phone Number is Required').typeError('Phone Number must be a number'),
        Password: Yup.string().required('Password is Required').min(6),
        Email: Yup.string().required('Email is Rquired').email('Enter a Valid Email Address'),
        FirstName:Yup.string().required('First Name is Required '),
        LastName:Yup.string().required('Last Name is Reqiued '),
        CPassword:Yup.string().required('Confirm Password is Reqiued ').oneOf([Yup.ref('Password'), null], 'Passwords must match')

    });

        // functions to build form returned by useForm() hook
        const { register, handleSubmit, reset, errors } = useForm({
            resolver: yupResolver(validationSchema)
        });
 const   handleRegister = (data) =>{


    setLastName(data.LastName);
    setPassword(data.Password);
    setFirstName(data.FirstName);
    setEmail(data.Email);
    setPhoneNumber(data.Phone);
      dispatch(FindUserByPhoneandEmail(data.Phone,data.Email));
   
    }

    const ValidateOtp=(otp)=>{
        dispatch(CLEARMESSAGE())
        setotp(otp)
        dispatch(ValidateUserOtp(PhoneNumber,otp,PhoneNumber,Email,LastName,FirstName,Password))
    
    };

    const ResendOtp=(otp)=>{
        dispatch(CLEARMESSAGE())
        dispatch(SendOtptouser(PhoneNumber))
    };

    return (
        <div className="container body main-wrapper col-md-6"> 
        <div className="card ">
            <h3 className="card-header">Register</h3><br></br>
            <div className="card-body ">

            <span className="text-danger"> {regErrorMgs} </span> 
            <div className={loading?"mb-3 ":""}> 
    {loading? "Loading Please Wait    " : ""}
<Squares color="blue" size={32}  speed={1} animating={loading}/>

<SweetAlert
  error
  title="Registration Error !"
  onConfirm={confirm}
  onCancel={cancle}
  show={phonecheckerror}
>
  <span className="text-danger"> {regErrorMgs} </span> 
</SweetAlert>

<SweetAlert
  error
  title="Registration Error !"
  onConfirm={cancle}
  onCancel={cancle}
  show={Otpvalidation_error}
>
  <span className="text-danger"> {regErrorMgs} </span> 
</SweetAlert>
<SweetAlert
  error
  title="Registration Error !"
  onConfirm={confirm}
  onCancel={cancle}
  show={regError}
>
  <span className="text-danger"> {regErrorMgs} </span> 
</SweetAlert>
<SweetAlert
  input
  required
  showCancel={false}
  showCloseButton
  confirmBtnText="Validate OTP"
  cancelBtnText="Resend OTP"
  inputType="password"
  title="Enter Otp Sent To Your Phone"
  validationMsg="You must enter your OTP!"
  onConfirm={(response) =>ValidateOtp(response)}
  onCancel={Confirmotperror}
  closeOnClickOutside={Confirmotperror}

  show={otpsentsuccess}

  
/>

    </div> 
           <form name="form" onSubmit={handleSubmit(handleRegister)}>

           <div className="row">

          
          <div className="col-md-6">
          <div className="form-group">

              <label>Phone Number</label>
             <input  name="Phone" ref={register} className={'form-control'+ (errors.Phone?' is-invalid':'')} type="text"/>
             <span className="error">{errors.Phone?.message}</span>
          </div>

          <div className="form-group">
          <label>Email</label>
             <input name="Email"  ref={register} className={'form-control'+ (errors.Email?' is-invalid':'')} type="text"/>
             <span className="error">{errors.Email?.message}</span>
         </div>


         <div className="form-group">
         <label>First Name</label>
             <input name="FirstName"  ref={register} className={'form-control'+ (errors.FirstName?' is-invalid':'')}type="text"/>
             <span className="error">{errors.FirstName?.message}</span>
         </div>

         <div className="form-group">
         <label>Last Name</label>
             <input name="LastName"  ref={register} className={'form-control'+ (errors.LastName?' is-invalid':'')} type="text"/>
             <span className="error">{errors.LastName?.message}</span>
         </div>
         </div>
         <div className="col-md-6">
         <div className="form-group">
         <label>Password</label>
             <input name="Password"  ref={register} className={'form-control'+ (errors.Password?' is-invalid':'')} type="password"/>
             <span className="error">{errors.Password?.message}</span>
         </div>

         <div className="form-group">
         <label>Confirm Password</label>
             <input name="CPassword"  ref={register} className={'form-control'+ (errors.CPassword?' is-invalid':'')} type="password"/>
             <span className="error">{errors.CPassword?.message}</span>
         </div>
         <div className="form-group ">

             <button className="btn btn-primary ">Register</button>
             </div>

     <div className="mt-5"> <Link  to ='/Login'>Already Register ? Login Here </Link> </div>        
           </div>
           </div>
           </form>
            
        </div>
       </div>
        </div>
    )
};

export default RegisterPage;