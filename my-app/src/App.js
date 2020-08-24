import withRoot from './withRoot';
import React from 'react';
import './App.css';
import AppAppBar from './views/AppAppBar';
import AppFooter from './views/AppFooter';
import ProductHero from './views/ProductHero';
import ProductCategories from './views/ProductCategories';
import { Typography,Button, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CustomerService from './views/CustomerService';
import ProductHeroLayout from './views/ProductHeroLayout';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Login from './Login';
import Register from './Register';
import Home from './Home';


function App() {
  
  return (
    <Router>
    <div className="App">
    <AppAppBar/>
    <Switch> 
    <Route path="/Home" component={Home}  />
    <Route path="/Login" component={Login}  />
    <Route path="/Register" component={Register}  />

    <ProductHero/>

    </Switch>
   </div>
  
   </Router>
   
  );
}



export default withRoot(App);
 