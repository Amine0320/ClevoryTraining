import React from "react"; 
import { FU } from "../../constants";
import styles from "../../style";  
import './NFU.css' ; 
// Formation U stands for Formation Par Unite 
const FormationU = ({ name, img , link }) =>   ( 
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"> 
          <a href={link} > 
          <div className="flex flex-row">
          <img src={img} alt={name} className="w-[48px] h-[48px] " />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] ">
                {name}
              </h4> 
            </div> 
          </div> 
          </a>  
        </div> 
) ;  
// NFU STANDS FOR NOS FORMATIONS PAR UNITES  
      const NFU = () => (  
                    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      
          <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={`${styles.heading2}`}>  
             Nos formations par éditeurs
            </h2>  
            <div className="w-full md:mt-0 mt-6">
              <p className={`${styles.paragraph} text-left max-w-[450px]`}> 
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            {FU.map((card) => <FormationU key={card.id} {...card} />)} 
          </div>   
        </section> 
      );
export default NFU ; 
