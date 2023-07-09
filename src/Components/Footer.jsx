import sellZeeIcon from "../Assets/Images/sellzeeIcon.png"
import links1 from "../Assets/Images/links1.png"
import links2 from "../Assets/Images/links2.png"
import links3 from "../Assets/Images/links3.png"

const Footer = () => {
  const images = [sellZeeIcon, links1, links2, links3]
  const mappedFoot = images.map((image) => {
    return <img src={image} alt="footLinks" />
  })
  return (
    <div className=' h-[20rem] w-[100%] bg-[#000848] mt-[5rem] flex items-center justify-evenly'>
      {mappedFoot}
    </div>
  )
}

export default Footer