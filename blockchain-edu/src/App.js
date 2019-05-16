import React from 'react';
import {Route, BrowserRouter } from "react-router-dom";
import Responsive from 'react-responsive';
import { ToastContainer } from 'react-toastify';
import './App.css';
import LandingPage from './Components/LandingPage/LangingPage';

const Desktop = props => <Responsive {...props} minWidth={813} />;

function App() {
  return (
    <BrowserRouter>
    <Desktop>
    <div className="App">
    <Route path="/" exact component={LandingPage}/>
    </div>
    </Desktop>
    <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
