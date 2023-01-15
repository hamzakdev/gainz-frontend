import React, { useState } from 'react'
import '../additionalcss/hamburger.css'
import SideMenu from './SideMenu'
// import SideMenu from './SideMenu'

const Hamburger = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
<div >

      <SideMenu isChecked={isChecked}   />
    <div className='z-[1111]  '>

        <label htmlFor="check">
    <input onChange={()=>setIsChecked((prev)=>!prev)}   type="checkbox" id="check"/> 
    <span></span>
    <span></span>
    <span></span>
  </label>
  </div>
</div>
  )
}

export default Hamburger