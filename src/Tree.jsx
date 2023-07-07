import {  AboutUs ,  Clients, CTA, Stats, Hero, Purpose  } from "./components";
import Partenaires from "./components/Partenaires";
const Tree = () => (
<div> 
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