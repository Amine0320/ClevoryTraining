import { clients , responsive } from "../constants"; 
import styles from "../style";
import React from 'react';  
import '../index.css' ;   
import "react-multi-carousel/lib/styles.css"; 

export default function Clients() {
  const Clients = clients.map((client) => (
    <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-1`}>
    <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain img" />
  </div> 
  ));   
  return ( 
<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}> 
    <h2 className={`${styles.heading2} Titre1  text-black `}>
      Ce qui nous a fait confiance  <br className="sm:block hidden" />
      </h2>
      {clients.map((client) => ( 
        <div showDots={true} responsive={responsive}  key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-1`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain img" />
        </div> 
      ))}  
    </div>  
  </section>  
  </div>
  </div> 
    );  
};   