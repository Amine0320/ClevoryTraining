import {ACC1} from "../../../assets/pics";
import {ACCC} from "../../../constants";
import styles , {layout} from "../../../style"; 
import './ACC.css' ;   
const AccCard = ({  title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== ACCC.length - 1 ? "mb-3" : "mb-0"} feature-card`}>  
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
// ACC STANDS FOR ACCOMPAGNEMENTS 
const ACC = () => (  
<div className={`bg-primary`}> 
    <div className={`${styles.boxWidth}`}>  
<section id="features" className={layout.section} >
  <div className={layout.sectionInfo}>
    <h2 className={`${styles.heading2} mb-10 mt-20  PurposeT `}>  
    Accompagnement  <br className="sm:block hidden" />
    </h2> 
    <img src={ACC1} alt="ACC" className="mt-10  w-[100%] h-[100%] relative z-[5] object-contain img-luxurious" /> 
  </div>  
  <div className={`flex-col container-card`}>
    <div className="card1"> 
    {ACCC.map((feature, index) => ( 
      <a key={feature.id} className="H2 mb-0 w-[100%] h-[50%]">
      <AccCard {...feature} index={index} />  
    </a>   
    ))} 
  </div>   
  </div> 
</section>
</div>
</div> 
);
export default ACC;  
