import React from "react";
import { Container, Row, Col } from "react-bootstrap";   
import Card1 from "./cards" ;  
import { Card } from "../constants";
function NFU() { 
  return (
    <Container style={ {display: "flex"  , justifycontent: "space-between" , flexdirection: "row",flexwrap: "wrap"} }  fluid className="about-section">    
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col style={{justifyContent: "center", paddingTop: "30px",paddingBottom: "50px" }} > 
          {Card.map((feature, index) => ( 
        <a key={feature.id} href={feature.link} className="H2 mb-0 w-[100%] h-[50%]">
        <Card1 {...feature} index={index} />  
      </a>   
      ))}    
          </Col>  
        </Row> 
      </Container> 
  );
}  
export default NFU ;
