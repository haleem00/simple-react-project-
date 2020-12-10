import React  from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter,Route, Switch} from "react-router-dom"
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import Products from "./components/pages/Products"
import Contactus from "./components/pages/Contactus"
import Signup from "./components/pages/Signup.js"


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    
    <Route exact path="/" component={Home}/>
    <Route  path="/Services" component={Services}/>
    <Route  path="/Products" component={Products}/>
    <Route  path="/Contactus" component={Contactus}/>
    <Route  path="/Signup" component={Signup}/>
    
    
    </BrowserRouter>
  );
}

export default App;





