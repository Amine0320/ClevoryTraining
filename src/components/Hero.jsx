import styles from "../style";
import {  HERO, test1 , test2 , test3  } from "../assets";
import GetStarted from "./GetStarted";
import '../index.css' ; 
// First SECTION AFTER NAVBAR HERE !
const Hero = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>  
        </div> */} 

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] H1 ">
            Learning 
            <span className="text-gradient">Today</span>{" "}
          </h1> 
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full H1 ">
          Leading <span className="text-gradient">Tomorrow</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <div className="hero1">
        <div> 
        <img src={test1}  alt="billing" className="test1" />
        </div>
        <div>
        <img src={test3}  alt="billing"  className="test2" />
        </div>
        <div>
        <img src={test2}  alt="billing"  className="test3" />
        </div> 
      </div> 
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
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
