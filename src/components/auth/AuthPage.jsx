import React, { useEffect } from 'react';
import './index.css';

const AuthPage = () => {
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
      // Clean up the event listeners when the component unmounts
      signUpButton.removeEventListener('click', handleSignUpClick);
      signInButton.removeEventListener('click', handleSignInClick);
    };
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  return (
    <div className="container" id="container">
    <div className="form-container sign-up-container">
        <form  encType="multipart/form-data">
          <h2>Create Account</h2>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Full Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Phone number" name="phone" />
          <input type="password" placeholder="Password" name="password" />
          <input type="password" placeholder="Confirm password" name="repeatPassword" />
          <button type="submit" value="submit" name="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form  encType="multipart/form-data">
          <h1>Sign in</h1>
          <input type="text" placeholder="Email OR Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <a href="forgetPassword.html">Forgot your password?</a>
          <button type="submit" value="submit" name="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Have an account!</h1>
            <p>Keep yourself connected</p>
            <button className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>You don't have an account ? <br /> become one of ours!</p>
            <button className="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
