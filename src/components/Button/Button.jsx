import React from "react"; 
import '../../style' ;  
const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Chercher une formation 
  </button>
); 
export default Button; 