import { ABOUT  } from "../assets/pics";
import styles, { layout } from "../style"; 

const AboutUs = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={ABOUT} alt="AboutUs" className="w-[100%] h-[100%] relative z-[5] object-contain img-luxurious" /> 
    </div> 

    <div className={layout.sectionInfo}>
      <h2 className={` H1 ${styles.heading2}`}> 
      A propos de nous<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 animated-paragraph `}>
      Clevory Training est un centre de formation et de coaching agréé par le MFPE offrant les formations accréditées les plus prisées sur le marché.
Avec une large offre dans le domaine des TIC, du management et des soft skills. Clevory Training se positionne en tant que partenaire des entreprises pour les accompagner leur transformation digitale en relevant les nouveaux défis technologiques et managériaux.
      </p> 
    </div>
  </section> 
  </div>
  </div>
);
export default AboutUs ; 
