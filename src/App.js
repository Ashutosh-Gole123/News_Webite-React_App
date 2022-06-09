import React from 'react';

import {
  Route,Switch
} from "react-router-dom";
import Service from './components/Pages/NavPages/Service';
import Home from './components/Pages/Home';
import Contact from './components/Pages/NavPages/ContactUs';
import Error from './components/Pages/NavPages/Error';
import SignUpForm from './components/Pages/NavPages/SignUpForm';
import LogInForm from './components/Pages/NavPages/LogInForm';



const App = () => {
//  React router-dom to readirect pages
  return (
    <>  
       <Switch>
        <Route exact path='/' component={()=><Home authorized={true}/>}></Route>
        <Route path='/service' component={Service}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/SignUp' component={SignUpForm}></Route>
        <Route path='/LogIn' component={LogInForm}></Route>
        <Route component={Error}></Route>  
       </Switch>
    </>

    );
}

export default App