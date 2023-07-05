import styles from "./style";
import {  AboutUs ,  Clients, CTA, Footer, Navbar, Stats, Hero, Purpose  } from "./components";
import Partenaires from "./components/Partenaires";
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