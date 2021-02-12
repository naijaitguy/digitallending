import {
    AUTH_LOGGING_IN,
    AUTH_LOGGED_IN,
    AUTH_ERR_LOG_IN,
    AUTH_LOGOUT,
    AUTH_CLEAR_LOGIN_ERROR_MESSAGE,
    LOGIN_SUCCESS,
    AUTH_SUCCESS,
    USER_UPDATE_LOADING,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_ERROR,
    PASSWORD_UPDATE_LOADING,
    PASSWORD_UPDATE_SUCCESS,
    PASSWORD_UPDATE_ERROR,
  } from '../constants/auth';
 import {userService } from '../../Services/services';
  //import { userService } from '../../_services/user.service';
  import { errorParser } from '../../Services/apiconstant';
  import {history} from '../../Helper/history'
 
  import React, { useState } from 'react';
  
  export const loggedIn = data => ({
    type: AUTH_LOGGED_IN,
    payload: data,
  });


  export const loggInsuccess = () => ({
    type: AUTH_SUCCESS
    
  });
  
  export const clearLoginErrorMessage = () => ({
    type: AUTH_CLEAR_LOGIN_ERROR_MESSAGE,
  });
  
  export const errorLogIn = errorMessage => ({
    type: AUTH_ERR_LOG_IN,
    payload: errorMessage,
  });
  
  export const loggingIn = () => ({
    type: AUTH_LOGGING_IN,
  });
  
  export const loggedOut = () => ({
    type: AUTH_LOGOUT,
  });
  
  export const logout = () => async (dispatch, getState) => {
    
    await userService.logout().then((res) => {
      dispatch(loggedOut());
      history.push('/login')
    }).catch((err) => {   history.push('/login') });
  };
  
  export const login =  (phone, password, from) => (dispatch, props) =>{
    dispatch(loggingIn());
    userService.login(phone, password).then(async (res) => {
      dispatch(loggInsuccess());
     //console.log(res.data)
     history.push(from);
    }).catch((err) => {
      dispatch(errorLogIn(errorParser.parseLoginError(err).message));
    //  console.log(err);
    });
  };


  export const GetloginUser =  () => (dispatch, props) =>{
   
    userService.GetLoginUser().then(async (res) => {
     await dispatch(loggedIn(res.data));
    // console.log(res.data)
 // await navigationService.navigate('DrawerNavigationRoutes');
  
    }).catch((err) => {
      dispatch(errorLogIn(errorParser.parseLoginError(err).message));
    //  console.log(err);
    });
  };


  export const UpdateUser =  (FirstName, LastName,Email) => (dispatch, props) =>{
   dispatch(userupdateloading())
    userService.UpdateUser(FirstName, LastName,Email).then(async (res) => {
     await dispatch(userupdatesuccess());
     console.log(res.data)
 // await navigationService.navigate('DrawerNavigationRoutes');
  
    }).catch((err) => {
      dispatch(userupdateerror(errorParser.parseLoginError(err).message));
      console.log(err);
    });
  };
  
  export const UpdateUserPassword =  (OldPassword,NewPassword) => (dispatch, props) =>{
     dispatch(passwordupdateloading())
    userService.UpdateUserPassword(OldPassword,NewPassword).then(async (res) => {
     await dispatch(passwordupdatesuccess());
     console.log(res.data)
 // await navigationService.navigate('DrawerNavigationRoutes');
  
    }).catch((err) => {
      dispatch(passwordupdateerror(errorParser.parseLoginError(err).message));
     console.log(err);
    });
  };

 

  export const userupdateloading = ()=>({

    type:USER_UPDATE_LOADING

  });

  export const userupdatesuccess = ()=>({
type:USER_UPDATE_SUCCESS

  });

  export const userupdateerror = (data)=>({

    type:USER_UPDATE_ERROR,
    payload:data

  });
  ///////////////////////////////////////

  export const passwordupdateloading = ()=>({

    type:PASSWORD_UPDATE_LOADING

  });

  export const passwordupdatesuccess = ()=>({
 
    type: PASSWORD_UPDATE_SUCCESS

  });

  export const passwordupdateerror = (data)=>({

    type:PASSWORD_UPDATE_ERROR,
    payload:data
  });