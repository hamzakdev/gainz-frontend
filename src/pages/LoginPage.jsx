import React from 'react'
import Login from '../components/Login'

const LoginPage = () => {
  document.title = "Login - GAINZ.GA"
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'calc(100vh - 140px)'}}><Login /></div>
  )
}

export default LoginPage