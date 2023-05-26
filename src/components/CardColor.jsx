import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardColor = ({color, borrarColor}) => {
  return (
    <section>
      <Card style={{ width: "18rem" }} className="m-2">
        <Card.Body>
          <Card.Title>{color}</Card.Title>
          <div style={{backgroundColor: `${color}`,height: "10rem"}}>
          </div>
          <Button variant="danger" onClick={()=> borrarColor(color)}>Borrar</Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CardColor;
