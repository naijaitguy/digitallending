import axios from 'axios';
import { API_URL} from '../Helper/config';
import { headers, reqheaders} from '../Helper/AuthHeader';
import { history } from '../Helper/history';



async function GetLoginUser() {

  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}/Identity/GetLoginUser`, {headers}).then( async(response) => {

     
          resolve(response);
          
    //  console.log(response.data);
    }).catch(err => reject(err));
  });
}

async function login(PhoneNumber, Password) {
 
  return new Promise((resolve, reject) => {
    axios.post(`api/Identity/AuthenticatemobileUser`, {
      PhoneNumber,
      Password,
    },{reqheaders}).then( async(response) => {

      resolve(response)
    localStorage.setItem('userToken', response.data.AccessToken)
    localStorage.setItem('refreshToken', response.data.RefreshToken)
     // console.log(response.data.RefreshToken)
    }).catch(err => reject(err));
  });
}

async function logout(getState) {
  return new Promise(async (resolve, reject) => {
const RefreshToken = localStorage.getItem("refreshToken");
    axios.post(`api/Identity/LogOut`,{RefreshToken}, {headers}, {

    }).then(async (response) => {
      resolve(response);
      localStorage.removeItem('userToken');
      localStorage.removeItem('refreshToken')
    }).catch(err => reject(err));
  });
}

async function CreateUser(PhoneNumber,Email,FirstName, LastName,Password){
  return new Promise((resolve, reject)=>{
axios.post(`api/identity/CreateMobileUser`,{PhoneNumber, Email, FirstName, LastName, Password},{reqheaders})

  .then(async(response)=>{
    resolve(response);
    localStorage.setItem('userToken', response.data.AccessToken)
    localStorage.setItem('refreshToken', response.data.RefreshToken)
  

}).catch(err =>
     reject(err) );
  });

};

async function FindPhoneNumberandEmail(PhoneNumber,Email){

  return new Promise((resolve, reject)=>{

    axios.post(`api//Identity/FindPhoneandEmail`,{PhoneNumber,Email})
     .then( async(res)=>{

       resolve(res);
 
     })
   
     .catch(err =>
      reject(err) );
   

});

}

async function CheckPhoneNumber(PhoneNumber){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/Identity/FindPhone`,{PhoneNumber})
     .then( async(res)=>{
   
       resolve(res);
      
     })
   
     .catch(err =>
      reject(err) );
   

});

}

async function SendOtp(PhoneNumber){

  return new Promise((resolve, reject)=>{

    axios.post(`api/Identity/Sendotp`,{PhoneNumber})
     .then( async(res)=>{
   
       resolve(res);
     //  console.log(res.data)
     }).catch(err =>
      reject(err) );
   

});

}

async function ValidateOtp(PhoneNumber, Otp){

  return new Promise((resolve, reject)=>{

    axios.post(`api/Identity/Validateotp`,{PhoneNumber, Otp})
     .then( async(res)=>{
   
       resolve(res);

     }).catch(err =>
      reject(err) );
   

});

}

async function DeleteOtp(PhoneNumber, Otp){

  return new Promise((resolve, reject)=>{

    axios.post(`api/Identity/DeleteOtp`,{PhoneNumber, Otp})
     .then( async(res)=>{
   
       resolve(res);
   
     }).catch(err =>
      reject(err) );
   

});

}

async function AddProfile(Company,Dob,
City,
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
      MaritalStatus){

  return new Promise((resolve, reject)=>{
axios.post(`${API_URL}/Profile/AddUpdateProfile`,{
  City,Gender,
  Company,Dob,
  State,HomeAddress,
  SalaryPayDay,
  SalaryAmount,GaurantorName,
  GaurantorPhoneNumber,
  GaurantorRelationship,
  EducationLevel,
  ProfessionalSubcatergory,
  ProfessionalCatergory,
  ProfessionalStatus,
  CompanyStartDate,
  MaritalStatus
},{headers})

  .then( async(Response)=>{
  
    resolve(Response);
 
})
  .catch((err) =>{ 
     reject(err)
    } );
  });

};

async function  AddLoan(IntrestRate, Amount){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/Account/Addloan`,{IntrestRate, Amount},{headers})
     .then( async(res)=>{
   
       resolve(res);
      console.log(res.data)
     }).catch(err =>
      reject(err) );
   

});

}

async function GetLoanHistory(){

  return new Promise((resolve, reject)=>{
 
    axios.get(`${API_URL}/Account/GetAllLoadByUserId`,{headers})
     .then( async(res)=>{
   
       resolve(res);
     
    //  console.log(res.data)
     }).catch(err =>
      reject(err) );
   

});

};

async function AddAccount( Bvn
  ,EligibleAmount,
   RepaymentAccountBank,
   SetllementAccountBank,
   SetllementAccountName,
   RepaymentAccountNumber,
   SetllementAccountNumber,
   RepaymentAccountName,
   Amount){

    return new Promise((resolve, reject)=>{
  axios.post(`${API_URL}/Account/AddUpdateAccount`,{ Bvn
    ,EligibleAmount,
     RepaymentAccountBank,
     SetllementAccountBank,
     SetllementAccountName,
     RepaymentAccountNumber,
     SetllementAccountNumber,
     RepaymentAccountName,
     Amount
   
  },{headers})
  
    .then( async(Response)=>{
    
      resolve(Response);
   
  })
    .catch((err) =>{ 
       reject(err)
      } );
    });
  
  };

async function GetAccount(){

return new Promise((resolve, reject)=>{
axios.get(`${API_URL}/Account/GetUserAccount`,{headers})

.then( async(Response)=>{
//console.log(Response.data)
resolve(Response);

})
.catch((err) =>{ 
 reject(err)
} );
});

};

async function GetProfile(){

return new Promise((resolve, reject)=>{
axios.get(`${API_URL}/Profile/GetUserProfile`,{headers})

.then( async(Response)=>{

resolve(Response);

})
.catch((err) =>{ 
reject(err)
} );
});

};

async function UpdateUser(FirstName, LastName,Email){

return new Promise((resolve, reject)=>{
axios.put(`${API_URL}/identity/UpdateUser`,{FirstName,LastName,Email},{headers})

.then( async(Response)=>{

resolve(Response);

})
.catch((err) =>{ 
reject(err)
} );
});

};

async function UpdateUserPassword(OldPassword,NewPassword){

return new Promise((resolve, reject)=>{
axios.put(`${API_URL}/identity/UpdateUserPassword`,{OldPassword,NewPassword},{headers})

.then( async(Response)=>{

resolve(Response);

})
.catch((err) =>{ 
reject(err)
} );
});

};

async function PasswordReset(PhoneNumber,Password){

return new Promise((resolve, reject)=>{
axios.put(`${API_URL}/identity/ResetPassword`,{PhoneNumber,Password})

.then( async(Response)=>{
console.log(Response.data)
resolve(Response);

})
.catch((err) =>{ 
reject(err)
} );
});

};

async function GetPaymentHistory(PhoneNumber, Otp){

  return new Promise((resolve, reject)=>{

    axios.post(`${API_URL}/Identity/Validateotp`,{PhoneNumber, Otp})
     .then( async(res)=>{
   
       resolve(res);
      // await AsyncStorage.setItem('userName',Response.data.UserName);
     // console.log(res.data)
     }).catch(err =>
      reject(err) );
   

});

}

async function GetLoanStatus(){

return new Promise((resolve, reject)=>{
axios.get(`${API_URL}/Account/GetUserLoanStatus`,{headers})

.then( async(Response)=>{
//console.log(Response.data)
resolve(Response);

})
.catch((err) =>{ 
 reject(err)
} );
});

};
export const userService = {
  login,AddProfile,GetLoginUser,AddAccount,GetAccount, GetProfile, CheckPhoneNumber,
  logout,DeleteOtp, ValidateOtp, GetLoanHistory, GetPaymentHistory, PasswordReset,
  CreateUser, FindPhoneNumberandEmail, SendOtp, AddLoan,UpdateUser, UpdateUserPassword, GetLoanStatus,
};
