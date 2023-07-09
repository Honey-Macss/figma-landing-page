import leftSub from "../../../Assets/Images/leftSub.png"
import rightSub from "../../../Assets/Images/rightSub.png"
import mAndY from "../../../Assets/Images/mAndY.png"
import emailSub from "../../../Assets/Images/emailSub.png"
import Footer from "../../Footer"
const Sub = () => {
  return (
    <div className=" h-[30rem] pt-[3rem] bg-[#ebedff] grid place-items-center">
        <h1 className=" text-[2rem] font-bold w-[33rem] text-center">Without Extra Charge ChooseYour Best Plan</h1>
        <div className=" px-[0.8rem] py-[0.5rem] mt-[1rem]">
            <img src={mAndY} alt="monthlyAndYearly" />
        </div>
        <div className=" flex items-center gap-[2rem] mt-[1.5rem]">
            <img className=" w-[25rem]" src={leftSub} alt="leftSubscription" />
            <img className=" w-[25rem]" src={rightSub} alt="rightSubscription" />
        </div>
        <div className=" bg-[#fdeee7] px-[13rem] py-[4rem] mt-[15rem] rounded-3xl">
            <img src={emailSub} alt="emailSubscription" />
        </div>
        <Footer />
    </div>
  )
}

export default Sub