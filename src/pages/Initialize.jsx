import React from 'react'
import { Link } from 'react-router-dom'

function Initialize() {
  return (
    <div>

        Please initialize your account, click here to login : <Link to="/login">login</Link>, or here to register: <Link to="/reguster">register</Link>
      
    </div>
  )
}

export default Initialize
