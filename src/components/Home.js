import React from 'react'
import HomeCard from './homeCard';
import '../css_files/home.css'
import Navbar from './Navbar';

// importing images(i can do this by storing images in an array but only 6 images are there, so import one by one)

import img1 from '../Images/image1.jpg';
import img2 from '../Images/image2.jpg';
import img3 from '../Images/image3.jpg';
import img4 from '../Images/image4.jpg';
import img5 from '../Images/image5.jpg';
import img6 from '../Images/image6.jpg';

// home component 
const Home = () => {
  return (
    <div className='home'>
  

        <div className='img-div'>
        <HomeCard img={img1}/>
        <HomeCard img={img2}/>
        <HomeCard img={img3}/>
        </div>
        <hr></hr>


        <h1>Collection of All your Memories</h1>
        
        <div className='img-div'>
        <HomeCard img={img4}/>
        <HomeCard img={img5}/>
        <HomeCard img={img6}/>
        </div>


       
    </div>
  )
}

export default Home;