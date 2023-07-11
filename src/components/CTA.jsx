import styles from "../style";
import Button from "./Button";
import '../index.css' ; 

const CTA = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} box`}>
      <div className={`${styles.boxWidth}`}>
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow box`}>
    <div className="flex-1 flex flex-col box ">
      <h2 className={`H2 ${styles.heading2}`}>Cherchez une fromation !</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 H1`}>
         paragraphe ici 
      </p>
    </div> 
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button /> 
    </div>
  </section>
  </div>
  </div>
);

export default CTA;
