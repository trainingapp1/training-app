import React from 'react';
import './App.css';
import AppAppBar from './views/AppAppBar';
import AppFooter from './views/AppFooter';
import ProductHero from './views/ProductHero';
import ProductCategories from './views/ProductCategories';
import { Typography,Button, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CustomerService from './views/CustomerService';
import 'react-slideshow-image/dist/styles.css';




function App() {
  
  return (
    <div>
     <AppAppBar/>
     <ProductHero/>
     <ProductCategories/>
     <CustomerService/>
     <AppFooter/>
    </div>
    
  );
}

export default App;
