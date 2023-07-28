import styles from "../../style";
import { LOGO1  } from "../../assets/pics";
import { socialMedia } from "../../constants";  
import './Footer.css' ; 
const Footer = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} footer`}>
  <div className={`${styles.boxWidth}`}>
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={LOGO1}
          alt="Clevory Training"
          className="w-[180px] h-[50px] object-contain"
        /> 
      </div> 
    </div> 
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px]  ">
        Copyright Ⓒ 2023 Clevory Training. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 social  "> 
        {socialMedia.map((social, index) => (
          <img 
            key={social.id}
            src={social.icon}
            alt={social.id} 
            className={`w-[21px] h-[21px] object-contain cursor-pointer img-social  ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0" }`} onClick={() => window.open(social.link)} />
        ))}
      </div>
    </div>
  </section> 
  </div>
  </div>
);

export default Footer;
