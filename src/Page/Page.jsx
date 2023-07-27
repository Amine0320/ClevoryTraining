import React, { useEffect } from 'react';
import axios from 'axios';  
import { Container } from "react-bootstrap"; 
import styles from '../style';
import './Page.css' ; 
const Page = () => {  
  useEffect(() => {

    const url = window.location.href;
    const regex = /\/client\/confirm\/(\w+)/;
    const match = url.match(regex);
    console.log(match)

    if (match) {
      const dynamicValue = match[1];
      const axiosUrl = `http://localhost:3000/client/confirm/${dynamicValue}`;
        console.log(axiosUrl)
      axios.post(axiosUrl)
        .then(response => {
          console.log(response.data); 
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []); 
  return ( 
    <Container  className="mt-20">   
     <div className="project-section">  
     <h2 className={`${styles.heading2} mt-20 CC  `}>Confirmation de Compte </h2>  
     <p className={`Topic ${styles.flexCenter} ${styles.paragraph} `}> 
        Votre compte a ete confimee avec succes. 
      </p> 
        </div>     
   </Container>    
  );
};

export default Page;
