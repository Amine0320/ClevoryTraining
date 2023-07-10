import {  AboutUs ,  Clients, CTA, Footer, Stats, Hero, Purpose ,  NavBar1   } from "./components";
import Partenaires from "./components/Partenaires";
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom' ; 
import Tree from "./tree";
import './index.css' ; 
import 'react-bootstrap'; 
const App = () => ( 
<div className="router"> 
<Router> 
 {/* INSPIRED BY MY COLLEGUE MOHAMED AMINE BEN MANSOUR (COPYRIGHTS)  */} 
      <NavBar1/> 
        <Routes> 
          <Route path='/' element={<Tree/>}/>  
          <Route path='/Hero' element={<Hero/>}/>  
          <Route path='/Partenaires' element={<Partenaires/>}/> 
          <Route path='/About' element={<AboutUs/>}/> 
          <Route path='/Stats' element={<Stats/>}/>
          <Route path='/Purpose' element={<Purpose/>}/>
          <Route path='/Cta' element={<CTA/>}/> 
          <Route path='/Clients' element={<Clients/>}/>  
        </Routes> 
    </Router> 
    <Footer/> 
</div> 
); 
export default App;