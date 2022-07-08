import React, { useState } from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCircleXmark,faCircleArrowLeft,faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    }
  ];

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
      {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" 
          onClick={()=>setOpen(false)} />
        <FontAwesomeIcon icon={faCircleArrowLeft} className='larrow' 
          onClick={()=>handleMove("l")} />
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className='rarrow' 
          onClick={()=>handleMove("r")} />
      </div>}
        <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=> handleOpen(i)} 
                  src={photo.src} alt="" 
                  className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDisc">
                Kraków is the second-largest and one of the oldest cities in Poland. 
                Situated on the Vistula River in Lesser Poland Voivodeship, the city 
                dates back to the seventh century. Kraków was the official capital 
                of Poland until 1596 and has traditionally been one of the leading 
                centres of Polish academic, economic, cultural and artistic life. 
                Cited as one of Europe's most beautiful cities, its Old Town with 
                Wawel Royal Castle was declared the first UNESCO World Heritage Site 
                in the world.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an 
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel