import React from 'react'
import { Logo } from '../styled/Navbar'
import '../additionalcss/loading.css'

const Loading = () => {
  return (
    <div className='loading-container'>
      <Logo className='loading-logo'>
            GAINZ.GA
          </Logo>
      </div>
  )
}

export default Loading