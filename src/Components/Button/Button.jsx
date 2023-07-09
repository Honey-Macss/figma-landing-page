import React from 'react'

const Button = (prop) => {
  return (
    <div>
        <button className=' py-[0.5rem] px-[1rem] bg-[orange] rounded-md text-lg text-white'>{prop.content}</button>
    </div>
  )
}

export default Button