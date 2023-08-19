import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './files/Login'
import HomePage from "./files/homepage"


function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>

}

export default App