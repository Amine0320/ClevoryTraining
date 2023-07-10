import { clients } from "../constants"; 
import styles from "../style";
import React from 'react';
import { useState} from "react";
import Carousel from 'react-bootstrap/Carousel';  
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import '../index.css' ; 


const scrollImages = (scrollAmount) => {
  const scrollContainer = document.querySelector('.scroll-container');
  if (scrollContainer) {
    scrollContainer.scrollLeft += scrollAmount;
  }
};


const Clients = () => (
<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}> 
    <h2 className={`${styles.heading2} Titre1 text-black `}>
      Ce qui nous a fait confiance  <br className="sm:block hidden" />
      </h2>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain img" />
        </div>
      ))}
    </div>
    <button onClick={() => scrollImages(-300)}>
  <FaAngleLeft />
</button>
<button onClick={() => scrollImages(300)}>
  <FaAngleRight />
</button> 
  </section> 
  </div>
  </div> 

  ); 
export default Clients; 
// NEW CODE HERE 
// function Clients() {
//   return (
//     <Carousel data-bs-theme="dark" className={`${styles.flexCenter} my-4`}>
//       {clients.map((client) => ( 
//       <Carousel.Item> 
//         <img 
//           className="sm:w-[192px] w-[100px] object-contain "
//           src={client.logo} 
//           alt="Second slide"
//         />
//       </Carousel.Item>
// ))} 
//     </Carousel>
//   );
// // }

// export default Clients;


// const Clients = ({ images }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const goToPrevious = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="carousel">
//       <button onClick={goToPrevious}>Previous</button>
//       <img src={images[activeIndex]} alt={`Image ${activeIndex}`} />
//       <button onClick={goToNext}>Next</button>
//     </div>
//   );
// };
// export default Clients ; 