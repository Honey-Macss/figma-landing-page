import face1 from "../../../Assets/Images/face1.png"
import check from "../../../Assets/Images/checkCirlce.png"

import Button from "../../Button/Button"
const Solutions = () => {
  return (
    <div className=" flex h-[fit-content] items-center gap-[5rem] pl-[8rem] mt-[2rem]">
        <img src={face1} alt="face1" className=" w-[35rem]" />
        <div className=" h-[fit-content] w-[23rem]">
            <p className=' text-[0.8rem] text-[orange] font-semibold'>LOREM IPSUM DOLOR SIT AME</p>
            <h1 className=' text-[2rem] font-bold'>Simple Solutions for Complex Connections</h1>
            <h6 className=' mt-[1rem] text-[0.7rem] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed donec gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi odio a velit feugiat sapien.</h6>
            <div className=" flex gap-[2rem] my-[0.75rem]">
                <span className=" flex gap-[0.5rem]">
                    <img src={check} alt="checkCircle" />
                    <h1 className=" font-semibold text-[0.9rem]">High Analysis</h1>
                </span>
                <span className=" flex gap-[0.5rem]">
                    <img src={check} alt="checkCircle" />
                    <h1 className=" font-semibold text-[0.9rem]">Certified Institute</h1>
                </span>
            </div>
            <Button content="Learn More"/>
        </div>
    </div>
  )
}

export default Solutions