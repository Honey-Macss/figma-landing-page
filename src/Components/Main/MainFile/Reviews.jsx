
const Reviews = (prop) => {
  return (
    <div style={{backgroundColor: prop.bg}} className=" grid place-items-center py-[3rem]">
        <img src={prop.src} alt="review" className=" w-[65rem]"/>
    </div>
  )
}

export default Reviews