import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { createContext, useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import Login from '../src/files/Login'
import HomePage from "./files/homepage"
import App from "./app"
import axios from 'axios';



ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
