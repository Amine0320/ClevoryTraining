import styles from "../style"; 
import GetStarted from "./GetStarted";
import '../index.css' ; 
// First SECTION AFTER NAVBAR HERE !
const Hero = () => {
  return ( 
    <div className={`bg-primary ${styles.flexStart} HERO1`}>
      <div className={`${styles.boxWidth}`}>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}> 
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]  Learning  ">
            Learning 
            <span className="text-gradient">Today</span>{" "}
          </h1>  
        </div> 
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full Leading ">
          Leading <span className="text-gradient">Tomorrow</span> 
        </h1> 
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  </p>
      </div> 
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
    </div>
    </div> 
  );
};
export default Hero;
