


import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter.js";
import {observer} from "mobx-react-lite";
import './App.css';
import NavBar from './pages/NavBar.js';

const App = observer(() => {


    return (
        <BrowserRouter>
         
            <AppRouter /> 
      
      
        </BrowserRouter>
        
    );
    
});

export default App;