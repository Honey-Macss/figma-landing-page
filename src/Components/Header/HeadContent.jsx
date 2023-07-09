import React from 'react'
import headImage from "../../Assets/Images/headImage.png"
import Button from '../Button/Button'

const HeadContent = () => {
    const buttonBorder = {
        border: "1px solid white"
    }
  return (
    <div className=' h-[fit-content] flex items-center mt-[2rem] pl-[11.5rem] pr-[4rem] justify-between'>
        <div className=' w-[23rem] h-[fit-content] text-[white] '>
            <p className=' text-[1rem]'>INSPIRATION TECHNOLOGY</p>
            <h1 className=' text-[2.5rem] font-extrabold'>Runs Faster.</h1>
            <p className=' text-[1.8rem] font-bold'>Costs less and never breaks</p>
            <hr className=' w-[90%] mt-[1rem]' />
            <h6 className=' mt-[1rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Commodi velit delectus ea nihil magnam neque officia, molestiae.</h6>
            <span className=' flex gap-[1rem] mt-[1rem]'>
                <Button content="Get Started"/>
                <button style={buttonBorder} className=' py-[0.5rem] px-[1rem]'>Free Trial</button>
            </span>
        </div>
        <img className=' w-[40rem]' src={headImage} alt="sample" />
    </div>
  )
}

export default HeadContent