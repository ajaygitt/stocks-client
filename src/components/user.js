import {BrowserRouter as Router,Route} from 'react-router-dom'
import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Home from './Home/Home';
import Header from './Header/Header';

function user() {

  

  return (
   
    <div>

<Router>
<Route exact path='/'><Header/> <Home/>  </Route>



</Router>

    </div>
  );
}

export default user;
