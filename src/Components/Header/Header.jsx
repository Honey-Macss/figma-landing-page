import React from 'react'
import Navigation from './Navigation'
import HeadContent from './HeadContent'

const Header = () => {
  return (
    <div  className=' h-[fit-content] bg-blue-600 pt-[3rem] pb-[2rem]'>
        <Navigation />
        <HeadContent />
    </div>
  )
}

export default Header