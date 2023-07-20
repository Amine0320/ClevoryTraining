import './NF.css' ; 
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; 
import { Container, Row, Col } from "react-bootstrap"; 
import { PURPOSE } from '../../assets/pics';
// import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';
const ProjectCard = (props) => (
  <Card className="project-card-view">
    <Card.Img variant="top" src={props.imgPath} alt="card-img" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text style={{ textAlign: "justify" }}>
        {props.description} 
      </Card.Text>
      <Button variant="primary" href={props.ghLink} target="_blank"> 
        {props.isBlog ? "Blog" : "GitHub"}
      </Button>
      {"\n"}
      {"\n"}  
    </Card.Body>
  </Card>
);  
const NF = () => ( 
  <Container fluid  className="project-section">   
  <h1 className="project-heading">
        <strong className="purple">Nos formations</strong>
        </h1>  
        <Row style={{ justifyContent: "center", paddingBottom: "10px"  }}>
          <Col  className="project-card">
            <ProjectCard
              imgPath={PURPOSE}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"  
            />
          </Col> 
          <Col  className="project-card">
            <ProjectCard
              imgPath={PURPOSE}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de" 
            />
          </Col> 
          <Col className="project-card">
            <ProjectCard
              imgPath={PURPOSE}
              isBlog={false} 
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"              
            />
          </Col> 
          <Col  className="project-card">
            <ProjectCard
              imgPath={PURPOSE}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI" 
            />
          </Col> 
          <Col  className="project-card">
            <ProjectCard
              imgPath={PURPOSE}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good" 
            />
          </Col> 
          <Col className="project-card">
            <ProjectCard
              imgPath={PURPOSE}
              isBlog={false} 
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection" 
            />
          </Col>
        </Row>  
        {/* <Grid container spacing={2} columns={16}>
    <Grid item xs={8}>
      <Item>xs=8</Item>
    </Grid>
    <Grid item xs={8}>
      <Item>xs=8</Item>
    </Grid>
  </Grid>  */}
    </Container>  
); 
export default NF ; 