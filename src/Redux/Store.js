import { composeWithDevTools } from 'redux-devtools-extension';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './Reducers/authentication.reducer';
import registerReducer from './Reducers/Register.reducer';
import LoanReducer from './Reducers/Loan.reducer';

const RootReducers = combineReducers({
  auth: authReducer,
  reg:registerReducer,
  loan:LoanReducer
});

const middleware = [thunk];

const store = createStore(
  RootReducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
