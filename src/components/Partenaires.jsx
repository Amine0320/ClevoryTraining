import {  parts  } from "../constants"; 
import styles from "../style";
import React from 'react'; 
import '../index.css' ; 
const partenaires= () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}> 
    <h2 className={`${styles.heading2} Titre `}>
      Nos Partenaires <br className="sm:block hidden" />
      </h2> 
      {parts.map((parts) => (
        <div key={parts.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={parts.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain img" />
        </div>
      ))}
    </div>
  </section>  
  </div>
  </div>
  );

export default partenaires ;  