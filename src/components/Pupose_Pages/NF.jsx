import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; 
import { Container, Row, Col } from "react-bootstrap"; 
import { CCC1, CLP2, IT, VMAEC } from "../../assets/Partenaires";
import { Microsoft } from "../../assets/FU";
import styles from "../../style";
import './NF.css' ;  
// NfCard STANDS FOR NOS FORMATIONS CARD 
const NfCard = (props) => (
  <Card className="project-card-view">
    <Card.Img variant="top" src={props.img} alt="card-img" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text style={{ textAlign: "justify" }}>
        {props.description} 
      </Card.Text>
      <Button variant="primary" href={props.Link} target="_blank"> 
        "Cliquez ici !" 
      </Button>
      {"\n"}
      {"\n"}  
    </Card.Body>
  </Card>    
);     
// NF STANDS FOR NOS FORMATIONS  
const NF = () => ( 
   <Container fluid className="mt-20">   
     <div className="project-section">  
     <h2 className={`${styles.heading2} mt-20 Title  `}>Nos formations</h2>  
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>   
          <div className="cards">  
          <Col  className="project-card"> 
            <NfCard 
              img={CLP2}
              isBlog={false} 
              title="Introducing Automation for Cisco Solutions (CSAU)"
              description=""
              Link=""  
            /> 
          </Col> 
          <Col  className="project-card">
            <NfCard
              img={CCC1}
              isBlog={false}
              title="Microsoft Azure - Conception et implémentation de solutions d'IA (AI-102T00)"
              description=""
              Link="" 
            />
          </Col> 
          <Col className="project-card">
            <NfCard
              img={Microsoft}
              isBlog={false} 
              title="Microsoft Azure - Conception et implémentation de solutions d'IA (AI-102T00)"
              description=""
              Link=""              
            />
          </Col>  
          </div>
          {/* ANOTHER DIV */}
          <div className="cards">
          <Col  className="project-card">
            <NfCard
              img={VMAEC}
              isBlog={false}
              title="Microsoft Azure - Conception et implémentation de solutions d'IA (AI-102T00)"
              description=""
              Link="" 
            />
          </Col> 
          <Col className="project-card">
            <NfCard
              img={IT}
              isBlog={false} 
              title="Microsoft Azure - Conception et implémentation de solutions d'IA (AI-102T00)"
              description=""
              Link="" 
            />
          </Col>
          </div>
        </Row>
        </div>   
   </Container>   
); 
export default NF ;  