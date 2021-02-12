/* eslint-disable import/no-anonymous-default-export */
import {
    AUTH_CLEAR_LOGIN_ERROR_MESSAGE,
    AUTH_ERR_LOG_IN,
    AUTH_LOGGED_IN,
    AUTH_LOGGING_IN,
    AUTH_LOGOUT,
    AUTH_SUCCESS,
    LOGIN_SUCCESS,
    PASSWORD_UPDATE_ERROR,
    PASSWORD_UPDATE_LOADING,
    PASSWORD_UPDATE_SUCCESS,
    USER_UPDATE_ERROR,
    USER_UPDATE_LOADING,
    USER_UPDATE_SUCCESS,
  } from '../constants/auth';
  
  const INITIAL_STATE = {
    user: null,
    loggingIn: false,
    loginsuccess:false,
    authsuccess:false,
    loginError:false,
    errorMessage: '',
    passwordupdateloading:false,
    passwordupdatesuccess:false,
    userupdateloading:false,
    userupdatesuccess:false,

  };
  
  export default function (state = INITIAL_STATE, action) {

    switch (action.type) {

      case USER_UPDATE_ERROR:
        return{
          ...state,
          userupdateloading:false,
          errorMessage:action.payload
        };

        case USER_UPDATE_LOADING:
          return{
            ...state,
            userupdateloading:true
          };
          case USER_UPDATE_SUCCESS:
            return{
              ...state,
              userupdateloading:false,
              userupdatesuccess:true

            };
             case PASSWORD_UPDATE_ERROR:
               return{
                 ...state,
                 passwordupdateloading:false,
                 errorMessage:action.payload
               };

               case PASSWORD_UPDATE_LOADING:
                 return{
                   ...state,
                   passwordupdateloading:true
                 };
                 case PASSWORD_UPDATE_SUCCESS:
                   return{
                     ...state,
                     passwordupdateloading:false,
                     passwordupdatesuccess:true,
                   };

      case AUTH_SUCCESS:
       return {
         ...state,
        
         authsuccess:true,
         loggingIn: false,
       

        };
      case AUTH_LOGOUT: {
        return {
          ...INITIAL_STATE,
        };
      }
      case AUTH_CLEAR_LOGIN_ERROR_MESSAGE: {
        return {
          ...state,
          loginError:false,
          passwordupdatesuccess:false,
          userupdatesuccess:false,
          errorMessage: '',
        };
      }
      case AUTH_LOGGING_IN:
        return {
          ...state,
          loginError:false,
          loggingIn: true,
        };
      case AUTH_LOGGED_IN:
        return {
          ...state,
          user: action.payload,
          authsuccess:true,
          loginsuccess:true,
         
        };
      case AUTH_ERR_LOG_IN:
        return {
          ...state,
          loggingIn: false,
          loginError:true,
          errorMessage: action.payload,
        };
      default:
        return state;
    }
  }
  