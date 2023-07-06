import styles from "./style";
import {  AboutUs ,  Clients, CTA, Footer, Navbar, Stats, Hero, Purpose  } from "./components";
import Partenaires from "./components/Partenaires";
// import AuthPage from "./components/auth/AuthPage" ; 
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom' ; 
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar /> 
      </div>
    </div> 
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div> 
    </div> 
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Partenaires />  
        <AboutUs/> 
        <Stats/>
        {/* <Routes>
          <Route path="/login" element={<AuthPage/>} /> 
        </Routes> */}
        <Purpose /> 
        {/* <CardDeal /> */} 
        {/* <Testimonials /> */}
        <CTA /> 
        <Clients/> 
        <Footer />
      </div>
    </div>
  </div> 
);
export default App;