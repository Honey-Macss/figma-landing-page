import React from 'react'
import img1 from "../../Assets/Images/img1.png"
import img2 from "../../Assets/Images/img2.png"
import img3 from "../../Assets/Images/img3.png"
import img4 from "../../Assets/Images/img4.png"
import img5 from "../../Assets/Images/img5.png"
import img6 from "../../Assets/Images/img6.png"
import img7 from "../../Assets/Images/img7.png"

const ImageLists = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7]
    const mappedImages = images.map((image) => {
        return  <span className='w-[16rem] h-20 shadow grid place-items-center'><img src={image} alt="company-logos" /></span>
    })
  return (
    <div className=' flex flex-wrap justify-center gap-[2.5rem]'>
        {mappedImages}
    </div>
  )
}

export default ImageLists