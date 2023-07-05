import React from 'react'
import Button from '../Button/Button'

const Navigation = () => {
  return (
    <div className=' flex justify-around align-middle'>
        <h1 className=' font-extrabold text-xl text-white'>SELLZEE</h1>
        <ul className=' flex align-middle gap-5 font-semibold text-slate-300'>
          <li className=' text-white'>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Testimonial</li>
          <li>Pricing</li>
        </ul>
        <Button />
    </div>
  )
}

export default Navigation