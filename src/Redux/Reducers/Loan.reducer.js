import { ACCOUNT_SUCCESS, LOADINGHISTORY, LOAN_ADD_ERROR, LOAN_ADD_SUCCESS, LOAN_HISTORY_ERROR, LOAN_HISTORY_SUCCESS, LOAN_LOADING, LOAN_STATUS_ERROR, LOAN_STATUS_SUCCESS, PROFILE_SUCCESS } from "../constants/Loan.constant"


const INITIAL_STATE ={
validatebvn_loading:false,
validatebvn_success:false,
ErrorMg:'',
loadinghistory:false,
loans:[],
loansuccess:false,
loanaddsuccess:false,
loanaddloading:false,
getprofilesuccess:false,
getaccountsuccess:false,
profile:'',
account:'',
loanhistoryerror:false,
unpaidloan:false,
 status:false
}


export default function (state=INITIAL_STATE, action ){

    switch(action.type){


            case LOAN_STATUS_ERROR:
                return{
            

                };
            case LOAN_STATUS_SUCCESS:
                return{
                    ...state,
                    status:action.payload,
                    unpaidloan:true
                };
        case ACCOUNT_SUCCESS:
            return{
                    ...state,
                account:action.payload,
                getaccountsuccess:true

            };

            case PROFILE_SUCCESS:
                return{
                      ...state,
    profile:action.payload,
    getprofilesuccess:true
                }

        case LOAN_LOADING:

        return{
       ...state,
       loanaddloading:true,

        };

        case LOAN_ADD_SUCCESS:
            return{

                ...state,
       loanaddloading:false,
       loanaddsuccess:true
            };
            case LOAN_ADD_ERROR:
                return{

                    ...state,
       loanaddloading:false,
       ErrorMg:action.payload
                };

    case LOADINGHISTORY:

    return{
    ...state,
    loadinghistory:true
    }

    case LOAN_HISTORY_ERROR:
        return{
            ...state,
            loadinghistory:false,
             loanhistoryerror:true,
        }

    case LOAN_HISTORY_SUCCESS:
        return{
            ...state,
            loadinghistory:false,
            loansuccess:true,
            loans:action.payload,

        }
        



        default:  return{ state}
    }
}