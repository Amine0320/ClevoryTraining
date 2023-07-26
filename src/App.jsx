import {AboutUs ,  Clients, CTA,  Stats, Main , Purpose, AuthPage, ForgotPasswordPage, Contact, GoToTop, NFU , Navbar , Footer  } from "./components";
import Partenaires from "./components/Partenaires/Partenaires";
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom' ; 
import Tree from "./Tree"; 
import Page from "./Page"; 
import Reset from "./Reset";
import ACC from "./components/Pupose_Pages/ACC";
import LS from "./components/Pupose_Pages/LS";
import NF from "./components/Pupose_Pages/NF";   
import './index.css' ; 
import 'react-bootstrap'; 
const App = () => ( 
<div className="router">  
<Router> 
 {/* INSPIRED BY MY COLLEGUE MOHAMED AMINE BEN MANSOUR (COPYRIGHTS)  */} 
 <GoToTop /> 
      <Navbar />  
        <Routes>   
          <Route path='/' element={<Tree/>}/>   
          <Route path='/main' element={<Main/>}/>   
          <Route path='/Partenaires' element={<Partenaires/>}/> 
          <Route path='/About' element={<AboutUs/>}/> 
          <Route path='/Stats' element={<Stats/>}/>
          <Route path='/Purpose' element={<Purpose/>}/>
          <Route path='/Cta' element={<CTA/>}/> 
          <Route path='/Clients' element={<Clients/>}/>  
          <Route path='/forget' element={<ForgotPasswordPage/>}/>  
          <Route path='/Auth' element={<AuthPage/>}/>  
          <Route path="/client/confirm/:activationcode" element={<Page />} />
          <Route path="/reset" element={<Reset/>} /> 
          <Route path="/ACC" element={<ACC/>} />  
          <Route path="/LS" element={<LS/>} /> 
          <Route path="/NF" element={<NF/>} /> 
          <Route path='/Contact' element={<Contact/>}/>    
          <Route path='/NFU' element={<NFU/>}/>          
        </Routes> 
    </Router> 
    <Footer/> 
</div>  
); 
export default App;