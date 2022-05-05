import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from "./components/pages/Homepage";
import Compose from './components/pages/Compose';
import SentMails from "./components/pages/SentMails";
import Groups from "./components/pages/Groups";
import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LoginPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                    <Route path="/sent" element={ <SentMails/>} />
                    <Route path="/compose" element = { <Compose/> } />
                    <Route path="/groups" element = { <Groups/> } />
                </Routes>
               
            </div>
        </Router>
    )
}



