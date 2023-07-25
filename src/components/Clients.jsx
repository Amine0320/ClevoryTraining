import { clients  } from "../constants"; 
import styles from "../style";
import React , {useState} from 'react';  
import { FaCircle } from 'react-icons/fa'; 
import '../index.css' ;   
import '../components/Slider/ImageSlider.css' ; 

export default function Clients() {
  const [current, setCurrent] = useState(0);
  const length = clients.length;
  const slidesToShow = 3; 

  const goToSlide = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < length) {
      setCurrent(slideIndex);
    }
  };
  
  if (!Array.isArray(clients) || clients.length <= 0) {
    return null;
  } 
  return ( 
<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
  <section className={`${styles.flexCenter} my-4 slider `}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}> 
    <h2 className={`${styles.heading2} Titre1  text-black `}>
      Ce qui nous a fait confiance  <br className="sm:block hidden" />
      </h2> 
    <div className='slides-container' style={{ transform: `translateX(-${current * (100 / slidesToShow)}%)` }} >
      {clients.map((client, index) => {
        return (
          <div className='slide' key={index}> 
            <img src={client.logo} alt='client logo' className='image' />
          </div>
        ); 
      })}
    </div>
    <div className='navigation-dots'>
      {clients.map((_, index) => (
        <FaCircle
          key={index}
          className={index === current ? 'dot active' : 'dot'}
          onClick={() => goToSlide(index)}
        />
      ))}
    </div> 
    </div>  
  </section>  
  </div>
  </div> 
    );  
};    
