import React from 'react';
import App from './components/App/App';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

