import React, { useEffect } from 'react';
import './Auth.css' ; 
import axios from "axios";
import { useState } from 'react';
const AuthPage = () => {
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [pass, setpass] = useState('')
  const [fulluser, setfullUser] = useState('')
  const [user, setUser] = useState('')  
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const handleSignUpClick = () => {
      container.classList.add('right-panel-active');
      document.querySelector('title').textContent = 'Sign up | Benna';
    };

    const handleSignInClick = () => {
      container.classList.remove('right-panel-active');
      document.querySelector('title').textContent = 'Sign in | Benna';
    };

    signUpButton.addEventListener('click', handleSignUpClick);
    signInButton.addEventListener('click', handleSignInClick);

    return () => { 
      signUpButton.removeEventListener('click', handleSignUpClick);
      signInButton.removeEventListener('click', handleSignInClick);
    };
  }, []); 
  const handleSubmit =async(e) =>{
    e.preventDefault()
    await axios.post('http://localhost:3000/client/register', { name:user, password: pass,fullname:fulluser,email,phone})
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  }
  const handleSignIn =async(e) =>{
    e.preventDefault()
    console.log(email)

    console.log(pass)   
    if (!user) {
      await axios
        .post('http://localhost:3000/client/signin', { password: pass, email })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    } else {
      await axios
        .post('http://localhost:3000/client/signin', { password: pass,  name: user })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    
     }; 
  } 


  return (
    <div className="container" id="container">
    <div className="form-container sign-up-container">
        <form  encType="multipart/form-data" onSubmit={handleSubmit} >
          <h2>Creer Compte </h2>
          <input type="text" placeholder="Nom d'utilisateur" name="username" onChange={(e)=>  setUser(e.target.value)}/>
          <input type="text" placeholder="Nom" name="name" onChange={(e)=> setfullUser(e.target.value)} />
          <input type="email" placeholder="Email" name="email" onChange={(e)=>setemail(e.target.value)} />
          <input type="text" placeholder="Num de Tel" name="phone" onChange={(e)=>setphone(e.target.value)} />
          <input type="password" placeholder="Mot de passe " name="password" onChange={(e)=>  setpass(e.target.value)} />
          <input type="password" placeholder="Confirmer mot de passe" name="repeatPassword" />
          <button type="submit" value="submit" name="submit">S'inscrire</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form  encType="multipart/form-data"  onSubmit={handleSignIn}>
          <h1>Se connecter </h1>
          <input type="text" placeholder="Email Ou Nom d'utilisateur" name="username" onChange={(e) => {  const value = e.target.value;
              if (value.includes("@")) {
                setemail(value);
              } else {
                setUser(value);
              }
            }} />
          <input type="password" placeholder="Mot de passe" name="password" onChange={(e)=>  setpass(e.target.value)}  />
          <a href="/forget">Réinitialisez mot de passe?</a> 
          <button type="submit" value="submit" name="submit">Se connecter</button>
        </form>
      </div> 
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Avoir un compte!</h1>
            <p>Restez connecté</p>
            <button className="ghost" id="signIn">Se connecter</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Bonjour !</h1>
            <p>Vous n'avez pas de compte ? <br /> deviens l'un des nôtres !</p>
            <button className="ghost" id="signUp">S'incrire</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;
