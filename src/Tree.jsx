import {  AboutUs ,  Clients, CTA, Stats, Hero, Purpose,  } from "./components";
import Partenaires from "./components/Partenaires";
const Tree = () => (
<div> 
    {/* <Loader />  */}
    <Hero />
    <Partenaires />  
    <AboutUs/> 
    <Stats/> 
    <Purpose /> 
    {/* <CardDeal /> */} 
    {/* <Testimonials /> */}
    <CTA /> 
    <Clients/> 
</div> 
);
export default Tree;  