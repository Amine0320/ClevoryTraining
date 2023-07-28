import React  from "react"; 
import './Reset.css' ; 
import { LOGO1 } from "../assets/pics";
const Reset = () => { 
  return (  
<div className="Reset">
<div className="wrapper">
      <div className="app-details">
        <img src={LOGO1} className="app-icon" alt="App Icon" />
        <h1 className="app-title">Change Password </h1>
      </div>
      <label htmlFor="amount">New Password :</label>
      <input type="text" className="in" />  
      <label htmlFor="amount">Confirm Password :</label>
      <input type="text" className="in"/>    
      <button id="submit-button" className="btn" >
        Submit
      </button>  
    </div> 
</div>
  ); 
}  
export default Reset ;   



