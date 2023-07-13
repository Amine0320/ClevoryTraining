import {  AboutUs ,  Clients, CTA, Footer, Stats, Hero, Purpose, Navbar, AuthPage, ForgotPasswordPage  } from "./components";
import Partenaires from "./components/Partenaires";
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom' ; 
import Tree from "./tree";
import './index.css' ; 
import 'react-bootstrap'; 
import Page from "./Page"; 
import Reset from "./Reset";
const App = () => ( 
<div className="router"> 
<Router> 
 {/* INSPIRED BY MY COLLEGUE MOHAMED AMINE BEN MANSOUR (COPYRIGHTS)  */} 
      <Navbar /> 
        <Routes>  
          <Route path='/' element={<Tree/>}/>   
          <Route path='/Hero' element={<Hero/>}/>  
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
        </Routes> 
    </Router> 
    <Footer/> 
</div> 
); 
export default App;