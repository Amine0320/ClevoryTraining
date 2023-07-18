import { PURPOSE } from "../../assets/pics";
import { features } from "../../constants";
import styles , {layout} from "../../style"; 
import '../../index.css' ; 
const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-3" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[20px]"> 
        {content} 
      </p>
    </div>
  </div>  
); 

const LS = () => (
    <div className={`bg-primary`}> 
    <div className={`${styles.boxWidth}`}> 
<section id="features" className={layout.section} >
  <div className={layout.sectionInfo}>
    <h2 className={`${styles.heading2} mb-10 PurposeT `}> 
    Ce Que Nous Offrons <br className="sm:block hidden" />
    </h2>
    <img src={PURPOSE} alt="AboutUs" className="mt-10 w-[100%] h-[100%] relative z-[5] object-contain img-luxurious" /> 
  </div>  
  <div className={` flex-col container-card`}>
    <div className="card">
    {features.map((feature, index) => ( 
      <a key={feature.id} href={feature.link} className="H2 mb-0 w-[100%] h-[50%]">
      <FeatureCard {...feature} index={index} />  
    </a>   
    ))} 
  </div> 
  </div>
</section>
</div>
</div>
);
export default LS;  