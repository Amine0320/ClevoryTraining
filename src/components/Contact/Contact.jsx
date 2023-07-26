import styles, { layout } from "../../style";
import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { Container} from "react-bootstrap";   
const Contact = () => {
  const map = "https://maps.google.com/maps?q=Clevory+Training,+Charguia+1&z=15&output=embed";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(""); 
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nom:", name);
    console.log("Email:", email);
    console.log("Sujet:", subject);
    console.log("Message:", message);

    axios
      .post("http://localhost:8080/contact", { name, email, subject, message })
      .then((response) => {
        console.log(response);
        setSuccessMessage(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        console.log("Erreur :", err);
      });
  }; 
  return (
    <> 
     <Container className="contact-cont">
     <div className={`bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <div className={layout.sectionInfo}>
            <section className="contacts padding">
              <div className="contact">
                <div className="left row">
                  <iframe title="map" src={map}></iframe>
                </div>
                <div className="right row"> 
                  <h1>Contactez-nous</h1>
                  <p>Nous sommes ouverts à toute suggestion ou simplement pour discuter.</p>

                  <div className="items grid2">
                    <div className="box">
                      <h4>ADRESSE:</h4>
                      <p>8, Rue des Mineraux (Ex-Rue 8603) Charguia 1, 2035 Tunisia</p>
                    </div>
                    <div className="box">
                      <h4>EMAIL:</h4>
                      <p>contact@clevory.com</p>
                    </div>
                    <div className="box">
                      <h4>TÉLÉPHONE:</h4>
                      <p>+216 31 404 377</p>
                    </div> 
                  <div className="container-card">
              <div className="card1">
                <form onSubmit={handleSubmit}>
                  <div className="flexSB">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nom"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    /> 
                  <input
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Créez un message ici..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button type="submit" className="primary-btn2">
                    ENVOYER MESSAGE
                  </button>
                  </div> 
                </form>
                </div>
                </div>
            </div>
            </div>
            </div>
            </section> 
          </div>
        </div>
      </div> 
      {successMessage && (
        <div className="popup">
          <p>Message envoyé avec succès!</p>
        </div>
      )}
     </Container> 
    </>
  );
};
export default Contact;
