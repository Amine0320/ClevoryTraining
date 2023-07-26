import styles from "../../style";
import Button from "../Button/Button"; 
import '../../index.css' ; 
// CF STANDS FOR CHERCHER FORMATION 
const CF = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} box`}>
      <div className={`${styles.boxWidth}`}>
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow box`}>
    <div className="flex-1 flex flex-col box ">
      <h2 className={`H3 ${styles.heading3}`}>Cherchez une fromation !</h2>  
    </div> 
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button /> 
    </div> 
  </section>
  </div> 
  </div> 
);

export default CF;  
