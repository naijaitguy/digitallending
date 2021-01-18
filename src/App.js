import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Router, Switch, } from 'react-router-dom';
import LoginPage from './Components/Auth pages/Login';
import HomePage from './Components/Secured Pages/Home';
import {history } from './Helper/history'
import { useEffect } from 'react';
import RegisterPage from './Components/Auth pages/Register';


function App() {

useEffect(()=>{
history.listen((location,action)=>{});

},[])

  return (
    <div className="App">
   <Router history = {history}>
     <Switch>
     <Route exact path="/" component ={LoginPage}/>
       <Route path="/Login" component ={LoginPage}/>
       <Route path="/Home" component ={HomePage}/>
       <Route path="/Register" component={RegisterPage}/>
       <Redirect from="*" to="/" />
     </Switch>
   </Router>
    </div>
  );
}

export default App;
