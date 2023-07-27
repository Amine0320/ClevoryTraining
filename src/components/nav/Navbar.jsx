import React, { useState, useEffect } from "react";
import "./Navbar.css"; 
import { LOGO1 } from "../.././assets/pics";  
import { navLinks } from "../../constants"; 

function Navbar() { 
    const [active, setActive] = useState("");  
    const [icon, setIcon] = useState("nav__toggler");
    const [isScrolled, setIsScrolled] = useState(false);
  
    const navToggle = () => {
      setActive("");  
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <nav className={`nav ${isScrolled ? "nav__scrolled" : ""}`}>
        <a href="/" className="LOGO">
          <img src={LOGO1} alt="clevoryTraining" className="w-[124px] h-[32px]" />
        </a>
        <ul className="nav__menu">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              }`}
              onClick={() => setActive(nav.title)} 
            >
              <a href={nav.link} className="H2">
                {nav.title}
                <div className="line" />
              </a>
            </li> 
          ))}  
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
  } 
export default Navbar;
