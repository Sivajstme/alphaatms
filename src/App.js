import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home from "./Pages/Home";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
            <Route path= '/' exact component={Home}/>
          <Route path='/services' exact component={Services}/>
          <Route path= '/products' exact component={Products}/>
          <Route path='/sign-up' exact component={SignUp}/>
        </Switch>

      </Router>
    </>
  );
}

export default App;
