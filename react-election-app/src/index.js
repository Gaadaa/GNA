import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
//BrowserRoute permet de naviguer entre les pages
ReactDOM.render(
 
   <BrowserRouter><App /></BrowserRouter> ,
  document.getElementById('root')
);

