import React from 'react'
import Navigation from './Navigation'
import HeadContent from './HeadContent'

const Header = () => {
  return (
    <div  className=' w-screen h-[75vh] bg-blue-600 pt-[3rem]'>
        <Navigation />
        <HeadContent />
    </div>
  )
}

export default Header