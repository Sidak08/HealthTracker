import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login'
import HomePage from "./homepage"


function Routeses() {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" component={<Login />} />
            <Route path="/" component={<HomePage />} />
        </Routes>
    </BrowserRouter>

}

export default Routeses