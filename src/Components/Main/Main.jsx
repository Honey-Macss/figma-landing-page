import React from 'react'
import ImageLists from './MainFile/ImageLists'
import Solutions from './MainFile/Solutions'
import Reviews from './MainFile/Reviews'
import review from  "../../Assets/Images/reviews.png"
import review2 from  "../../Assets/Images/review2.png"
import UserReview from './MainFile/UserReview'
import Sub from './MainFile/Sub'

const Main = () => {
  return (
    <div className=''>
      <ImageLists />
      <Solutions />
      <Reviews src={review} bg="white"/>
      <Reviews src={review2} bg="#FFF9F5"/>
      <UserReview />
      <Sub />
    </div>
  )
}

export default Main