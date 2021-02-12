
import { AUTH_LOGOUT, PASSWORD_RESET_ERROR, PASSWORD_RESET_LOADING, PASSWORD_RESET_SUCCESS } from "../constants/auth";
import { CLEAR_MESSAGE, FINDPHONE_ERROR, FINDPHONE_SUCCESS, LOADING_FINDPHONE, OTP_DELETE_SUCCESS, OTP_SENT_LOADING, OTP_SENT_SUCCESS, REGISTERED, REGISTERING, REGISTER_FAILED, REGISTER_SUCCESS, SET_ERRORMESSAGE, SET_SUCCESSMESSAGE, VALIDATION_ERROR, VALIDATION_SUCCESS } from "../constants/Register.constants";


const INITIAL_STATE = {
    errormessage:'',
    register_suc:false,
    phonecheckerror:false,
    phonefind_suc:false,
    deleteotp_suc:false,
    Otpvalidation_error:false,
    register_fail:false,
    loading:false,
    userName:'',
    token:"",
    resetloading:false,
    resetsuccess:false,
    otpsentsuccess:false,
    otpsentloading:false,

}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state= INITIAL_STATE, action){
 const{type,payload}= action;


    switch(type){

        case OTP_SENT_LOADING:
            return{
              ...state,
              otploading:true
            };
            case OTP_SENT_SUCCESS:

            return{
                ...state,
                otploading:false,
                otpsentsuccess:true
               

            }
        case PASSWORD_RESET_LOADING:
            return{
                ...state,
                resetloading:true
            };
            case PASSWORD_RESET_ERROR:
                return{
                    ...state,
                    resetloading:false,
                    errormessage:action.payload,
                };
                case PASSWORD_RESET_SUCCESS:
                    return{
                        ...state,
                        resetloading:false,
                        resetsuccess:true,
                    }
        case OTP_DELETE_SUCCESS:
            return{

                ...state,
                loading:false,
              deleteotp_suc:true

            };
  case VALIDATION_ERROR:
      return{
        ...state,
        loading:false,
        Otpvalidation_error:true,
        errormessage:payload,
        
      };
      case VALIDATION_SUCCESS:
          return{

            ...state,
            loading:false,
            validation_suc:true,
          };

        case CLEAR_MESSAGE:
            return{
                ...state, errormessage:'',
                resetloading:false,
                resetsuccess:false,
                phonecheckerror:false,
                otpsentsuccess:false,
                Otpvalidation_error:false,
                deleteotp_suc:false,
                loading:false
            }
        case LOADING_FINDPHONE:
            return{
...state,
validation_suc:false,
register_suc:false,
phonefind_suc:false,
loading:true,
errormessage:'',

            };

        case FINDPHONE_ERROR:
            return{
                ...state,
loading:false,
errormessage:payload,
phonecheckerror:true,
            };

            case REGISTER_FAILED:
                return{
                    ...state,
                    loading:false,
                    register_fail:true,
                     errormessage:payload
                };
        
            case FINDPHONE_SUCCESS:
                return{
  ...state,
loading:false,
phonefind_suc:true,

                };
case REGISTER_SUCCESS:
    return{
        ...state,
        loading:false,
        register_suc:true
    };

default:
    return state;


    }


}