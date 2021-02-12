
import { useDispatch } from "react-redux";
import { history } from "../../Helper/history";
import { errorParser } from "../../Services/apiconstant";
import { userService } from "../../Services/services";
import { AUTH_LOGOUT, PASSWORD_RESET_ERROR, PASSWORD_RESET_LOADING, PASSWORD_RESET_SUCCESS, PASSWORD_UPDATE_SUCCESS } from "../constants/auth";
import {  CLEAR_MESSAGE, FINDPHONE_ERROR, FINDPHONE_SUCCESS, LOADING,
     LOADING_FINDPHONE, OTP_DELETE_SUCCESS, OTP_SENT_SUCCESS, REGISTERED, REGISTERING,
      REGISTER_FAILED, REGISTER_SUCCESS, SET_ERRORMESSAGE, 
      SET_SUCCESSMESSAGE, VALIDATION_ERROR, VALIDATION_SUCCESS } from "../constants/Register.constants";

export const FindUserByPhoneandEmail = (Phone,Email) => (dispatch)=>{
    dispatch(CLEARMESSAGE())
    dispatch(LoadingFindphone())
    return userService.FindPhoneNumberandEmail(Phone,Email)
    .then( async (Response)=>{
   dispatch(SendOtptouser(Phone))
    })

    .catch((err)=>{
        dispatch(SetFindphoneerror(errorParser.parseLoginError(err).message))
    
    })

};

export const CheckUserByPhone = (Phone) => (dispatch)=>{
    dispatch(CLEARMESSAGE())
    dispatch(LoadingFindphone())
    return userService.CheckPhoneNumber(Phone)
    .then( async (Response)=>{
   dispatch(SetFindphonesuccess())

    })

    .catch((err)=>{
        dispatch(SetFindphoneerror(errorParser.parseLoginError(err).message))
    
    })

};


export const SendOtptouser = (Phone) => (dispatch)=>{
    dispatch(CLEARMESSAGE())
    return userService.SendOtp(Phone)
    .then( async (Response)=>{
      dispatch(SetOtpsentesuccess())
    })

    .catch((err)=>{
   dispatch(SetFindphoneerror(errorParser.parseLoginError(err).message))
       
    })

};

export const RemoveOtp = (Phone, otp) => (dispatch)=>{

    return userService.DeleteOtp(Phone,otp)
    .then( async (Response)=>{
      dispatch(SetOtpDeletesuccess())
  
    })

    .catch((err)=>{

    })

};

export const ValidateUserOtp = (Phone, otp,PhoneNumber,Email,LastName,FirstName,Password) => (dispatch)=>{

    return userService.ValidateOtp(Phone,otp)
    .then( async (Response)=>{
  dispatch(RemoveOtp(Phone,otp));
  dispatch(Register(PhoneNumber,Email,LastName,FirstName,Password))
    })

    .catch((err)=>{
        dispatch(RemoveOtp(Phone,otp))
        dispatch(SetValidationerror(errorParser.parseLoginError(err).message))
        
   
    })

};

export const ResetPassword = (PhoneNumber,Password)=>(dispatch)=>{
 dispatch(passwordresetloading())
  return  userService.PasswordReset(PhoneNumber,Password).then(async(res)=>{
        dispatch(passwordresetesuccess())
        console.log(res)
    })
    .catch((err)=>{
      dispatch(passwordreseterror(errorParser.parseLoginError(err).message))
        console.log(err.Message)
    })

  }

export const Register =  (PhoneNumber,Email,LastName, FirstName,Password) => (dispatch)=>{
  return   userService.CreateUser(PhoneNumber,Email,FirstName,LastName,Password)
    .then( async Response=>{
   history.push('/home')
    })
    .catch((err)=>{
     
      dispatch( SetError(errorParser.parseLoginError(err).message) );
      console.log(err)
    });
    
};

export const SetError=  message =>({

    type: REGISTER_FAILED,
    payload: message
});

export const SETSUCCESSMESSAGE =  sucmessage=>({

    type:SET_SUCCESSMESSAGE,
    payload:sucmessage

});


export const SetFindphonesuccess =  ()=>({

    type:FINDPHONE_SUCCESS,
    

});


export const SetFindphoneerror =  data=>({

    type:FINDPHONE_ERROR,
    payload:data

});
////////////////////////
export const SetValidationsuccess =  ()=>({

    type:VALIDATION_SUCCESS,
  

});
////////////////
export const SetOtpDeletesuccess =  ()=>({

    type:OTP_DELETE_SUCCESS,
  

});


export const SetOtpsentesuccess =  ()=>({

    type:OTP_SENT_SUCCESS,
  

});
/////////////////////

export const SetValidationerror =  data=>({

    type:VALIDATION_ERROR,
    payload:data

});

/////////////////////////
export const LoadingFindphone = ()=>({

    type: LOADING_FINDPHONE,
    

});

export const CLEARMESSAGE= ()=>({

    type: CLEAR_MESSAGE
   
});

export const Registering= ()=>({
    type:REGISTERING,
})

export const Registered= data =>({
    type:REGISTERED,
    payload:data
});

export const Registerlogout=()=>({

    type:AUTH_LOGOUT
});

export const passwordresetloading = ()=>({

    type:PASSWORD_RESET_LOADING

  });

  export const passwordresetesuccess = ()=>({
 
    type: PASSWORD_RESET_SUCCESS

  });

  export const passwordreseterror = (data)=>({

    type:PASSWORD_RESET_ERROR,
    payload:data
  });