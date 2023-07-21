import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
 const  Card1 = ({img , title , content ,btn }) =>  ( 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary">{btn}</Button> 
      </Card.Body>
    </Card> 
  ); 
  export default Card1 ; 