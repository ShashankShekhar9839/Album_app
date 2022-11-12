import React from 'react'
import '../css_files/homecard.css'

// this card will be shown on homepage 
// it will contain a image
const HomeCard = (props) => {
  return (
    <div className='homeCard'>
       <img className='img' src={props.img}/>
        
    </div>
  )
}

export default HomeCard;