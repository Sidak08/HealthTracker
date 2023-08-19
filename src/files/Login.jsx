import { useState } from 'react'
import mainImg from "../assets/login/backgroundImg.png"
import user from "../assets/navbar/you.svg"
import padlock from "../assets/login/padlock-2.png"
import apple from "../assets/login/appleLogo.png"
import google from "../assets/login/googleLogo.png"
import './Login.css'

let heading = "Track and Analyse Your Fitness"
let secondaryText = "Technology that empowers you, tracking your overall performance so you have the control to push yourself further."
let InputResult = "Continue"
function Login() {
  return (
    <div className='section1'>
      <img src={mainImg} alt="mainImg" srcSet="" className='mainImg' />
      <h1 className='mainText'>{heading}</h1>
      <div id='info'>

        <h2>Login/Sign Up</h2>

        <div id='inputDiv'>
          <div className='iconDiv'>
            <input type="email" className='input' placeholder='Email' />
            <img src={user} alt="" className='icon' />
          </div>

          <div className='iconDiv'>
            <input type="password" className='input' placeholder='Password' />
            <img src={padlock} alt="" className='icon' />
          </div>
          <button className='startButton'>{InputResult}</button>
        </div>
        <h3>OR</h3>
        <div id='otherSignIn'>
          <div className='otherIconDiv'>
            <button>Google</button>
            <img src={google} alt="" className='otherIcon' />
          </div>
          <div className='otherIconDiv'>
            <button>Apple</button>
            <img src={apple} alt="" className='otherIcon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
