import devit from "../../../Assets/Images/devit.png"
import face2 from "../../../Assets/Images/face2.png"
import quote from "../../../Assets/Images/quoteForDevit.png"
import left from "../../../Assets/Images/leftVector.png"
import right from "../../../Assets/Images/rightVector.png"
const UserReview = () => {
    const firstPic = {
        position: "absolute",
        left: "24rem",
        zIndex: "2"
    }
    const secondPic = {
        position: "relative",
        left:"20rem",
        zIndex: "1",
    }
    const quoteStyle ={
        position: "relative",
        left: "13rem",
        bottom: "10rem",
        zIndex: "2"
    }
  return (
    <div className=" grid place-items-center p-[3rem]">
        <div className=" grid place-items-center w-[20rem]">
            <h1 className=" text-[2rem] font-bold">User’s Review</h1>
            <p className=" mt-[0.5rem] text-[0.7rem] font-medium text-center">Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow</p>
        </div>
        <span className=" flex items-center pt-[3rem]">
            <div style={firstPic}>
                <h2 className=" text-[1.5rem] font-semibold">What People Say About Us</h2>
                <img className=" w-[35rem]" src={devit} alt="devitDetails" />
                <span className=" flex items-center gap-[1rem] justify-center">
                    <div className=" bg-[#ff5a05] p-[1rem] rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%]">
                        <img src={left} alt="leftArrow" />
                    </div>
                    <div className=" bg-[#ff5a05] p-[1rem] rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%]">
                         <img src={right} alt="rightArrow" />
                    </div>
                    
                </span>

            </div>
            <img style={secondPic} className=" w-[28rem]" src={face2} alt="devitPictures" />
            <div style={quoteStyle} className=" bg-[blue] p-[1.6rem] rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%]">
                <img className=" w-[3.5rem]" src={quote} alt="quoteForDevit" />
            </div>
        </span>
    </div>
  )
}

export default UserReview