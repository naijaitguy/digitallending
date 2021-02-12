import { errorParser } from "../../_services/apiErrorParser";
import { userService } from "../../_services/userService";
import { ACCOUNT_SUCCESS, ERROR_LOAN, LOADINGHISTORY, LOAN_ADD_ERROR, LOAN_ADD_SUCCESS, LOAN_HISTORY_ERROR, LOAN_HISTORY_SUCCESS, LOAN_LOADING, LOAN_STATUS_ERROR, LOAN_STATUS_SUCCESS, PROFILE_SUCCESS } from "../constants/Loan.constant";

export const AddProfile = ( City,
  Company,Dob,
    Gender,
    State,
    HomeAddress,
    SalaryPayDay,
       SalaryAmount,
       GaurantorRelationship,
        ProfessionalCatergory,
         GaurantorPhoneNumber,
       GaurantorName,
     EducationLevel,
        ProfessionalSubcatergory,
        ProfessionalStatus,
          CompanyStartDate,
          MaritalStatus)=>(dispatch)=>{

userService.AddProfile(
  City,
  Company,Dob,
    Gender,
    State,
    HomeAddress,
    SalaryPayDay,
       SalaryAmount,
       GaurantorRelationship,
        ProfessionalCatergory,
         GaurantorPhoneNumber,
       GaurantorName,
     EducationLevel,
        ProfessionalSubcatergory,
        ProfessionalStatus,
          CompanyStartDate,
          MaritalStatus).then( async(response)=>{
             
          })
          .catch((err)=>{
              console.log(err)
          })

          };

export const GetLoanHistory=()=>(dispatch)=>{
  dispatch(historyloading())
    return userService.GetLoanHistory().
  then(async (res)=>{

   await  dispatch(loanSuccess(res.data.Message))
    //console.log(res.data.Message)
  })
  .catch((err)=>{

    dispatch(LoanhistoryError(errorParser.parseLoginError(err).message))
console.log(err)
  })


};

export const GetProfile=()=>(dispatch)=>{
 
   return userService.GetProfile().
  then(async (res)=>{

    await dispatch(GetprofileSuccess(res.data))
  //  console.log(res.data)
  })
  .catch((err)=>{

    dispatch(LoanError(errorParser.parseLoginError(err).message))
    //console.log(err)
  })


};


export const GetAccount=()=>(dispatch)=>{

   return userService.GetAccount().
  then(async (res)=>{

    await dispatch(GetAccountSuccess(res.data))
    //console.log(res.data)
  })
  .catch((err)=>{

    dispatch(LoanError(errorParser.parseLoginError(err).message))
  //console.log(err)
  })


};

export const AddPayment=()=>()=>{

  dispatch(historyloading())
  return userService.AddProfile().
  then(async (res)=>{

    await dispatch(loanSuccess(res.data.Message))
    //console.log(res.data.Message)
  })
  .catch((err)=>{

    dispatch(LoanError(errorParser.parseLoginError(err).message))
console.log(err)
  })


}


export const AddAccount=(
 Bvn
,EligibleAmount,
 RepaymentAccountBank,
 SetllementAccountBank,
 SetllementAccountName,
 RepaymentAccountNumber,
 SetllementAccountNumber,
 RepaymentAccountName,
 Amount)=>(dispatch)=>{

  dispatch(historyloading())
  userService.AddAccount( Bvn
    ,EligibleAmount,
     RepaymentAccountBank,
     SetllementAccountBank,
     SetllementAccountName,
     RepaymentAccountNumber,
     SetllementAccountNumber,
     RepaymentAccountName,
     Amount).
  then(async (res)=>{

    dispatch(loanSuccess(res.data.Message))
   // console.log(res.data)
  })
  .catch((err)=>{

    dispatch(LoanError(errorParser.parseLoginError(err).message))
   //console.log(err)
  })

}


export const AddLoan=(IntrestRate, Amount)=>(dispatch)=>{
  dispatch(Addloanloading())
userService.AddLoan(IntrestRate, Amount)
.then( async(response)=>{
  await dispatch(AddloanSuccess(response.data))
console.log(response.data);
})
.catch((err)=>{
dispatch(AddLoanError(errorParser.parseLoginError(err).message))

})

};


export const GetLoanStatus=()=>(dispatch)=>{

  return userService.GetLoanStatus().
 then(async (res)=>{

   await dispatch(loanstatusSuccess(res.data))
  // console.log(res.data)
 })
 .catch((err)=>{

   dispatch(loanstatuserror(errorParser.parseLoginError(err).message))
 //console.log(err)
 })


};

export const historyloading =()=>({
  type:LOADINGHISTORY
})

export const LoanError =(data)=>({
  type: ERROR_LOAN,
  payload:data
})

export const LoanhistoryError =(data)=>({
  type: LOAN_HISTORY_ERROR,
  payload:data
})

export const loanSuccess = data =>({
  type:LOAN_HISTORY_SUCCESS,
  payload:data

})
/////////////////////

export const Addloanloading =()=>({
  type:LOAN_LOADING
})

export const AddLoanError =(data)=>({
  type: LOAN_ADD_ERROR,
  payload:data
})

export const AddloanSuccess = data =>({
  type:LOAN_ADD_SUCCESS,
  payload:data

});


export const GetprofileSuccess = data =>({
  type:PROFILE_SUCCESS,
  payload:data

})

export const GetAccountSuccess = data =>({
  type: ACCOUNT_SUCCESS,
  payload:data

})

////////////
export const loanstatusSuccess = (data) =>({
  type:LOAN_STATUS_SUCCESS,
 payload:data

})

export const loanstatuserror = () =>({
  type: LOAN_STATUS_ERROR,
 

})