import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Career from './Components/Career';
import Footer from './Components/Footer';

import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Navbar from './Components/Navbar';
import ClientShowcase from './Components/ClientShowcase';

import User from './Components/User';

import ContactForm from './Components/ContactForm';
import Restaurent from './Components/career/Restaurent';
import Constructions from './Components/career/Constructions';
import Cleaningservices from './Components/career/Cleaningservices';
import Retail from './Components/career/Retail';
import Supermarket from './Components/career/Supermarket';
import Transportation from './Components/career/Transportation';
import Staff from './Components/Staff';



const App = () => {

  
  return (
    
    
    <>
      
      <Router>
      <div></div>
       <Navbar/>
       
       
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/job" component={Career} />
        
        <Route path="/client" component={ClientShowcase} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/122" component={User} />
        <Route path="/staff" component={Staff} />

        <Route path="/category2" component={Restaurent} />
        <Route path="/ca" component={Constructions} />
        <Route path="/category3" component={Cleaningservices} />
        <Route path="/category4" component={Supermarket} />
        <Route path="/category5" component={Retail} />
        <Route path="/category6" component={Transportation} />
        
       
      </Switch>
      <Footer/>
     
    </Router>
    

   
   
      
      
    </>

   
    
  );
};

export default App;
