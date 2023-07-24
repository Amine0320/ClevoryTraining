import React from "react";
import { PURPOSE } from '../../assets/pics';
import './NF.css' ; 
import { Container, Card, Button } from "react-bootstrap"; 
// NF CARD STANDS FOR NOS FORMATIONS CARD 
const NfCard = (props) => (
  <Card className="project-card-view">
    <Card.Img variant="top" src={props.img} alt="card-img"/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text style={{ textAlign: "justify" }}>
        {props.description} 
      </Card.Text>
      <Button variant="primary" href={props.Link} target="_blank"> 
        {props.isBlog ? "Blog" : "Cliquez ici !"}
      </Button>
    </Card.Body>
  </Card>
);
// NF STANDS FOR NOS FORMATIONS 
const NF = () => ( 
  <Container fluid className="project-section">   
    <h1 className="project-heading">
      <strong className="purple">Nos formations</strong>
    </h1>  
    <div className="d-flex flex-column align-items-center">
      <NfCard 
        img={PURPOSE}
        isBlog={false} 
        title="Chatify"
        description=""
        Link=""  
      /> 
      <NfCard
        img={PURPOSE}
        isBlog={false}
        title="Bits-0f-C0de"
        description=""
        Link="" 
      />
      <NfCard
        img={PURPOSE}
        isBlog={false} 
        title="Editor.io"
        description=""
        Link=""              
      />
      <NfCard
        img={PURPOSE}
        isBlog={false}
        title="Plant AI"
        description=""
        Link="" 
      />
      <NfCard
        img={PURPOSE}
        isBlog={false}
        title="Ai For Social Good"
        description=""
        Link="" 
      />
      <NfCard
        img={PURPOSE}
        isBlog={false} 
        title="Face Recognition and Emotion Detection"
        description=""
        Link="" 
      />
    </div>
  </Container>   
); 

export default NF;
