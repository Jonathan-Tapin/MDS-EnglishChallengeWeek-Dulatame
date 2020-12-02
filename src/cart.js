import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Cart() {

  const cartContent = JSON.parse(localStorage.getItem('mycart')) || [];
  console.log(cartContent);
    return (
      <div>

        <Container>
        <h2>Your cart</h2>
        <Row>
          {cartContent.map((dat) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={dat.img} />
                <Card.Body>
                  <Card.Title>{dat.label}</Card.Title>
                  <Card.Text>{dat.desc}</Card.Text>
                  <Card.Text>{dat.price+" £"} </Card.Text>
                  <Button variant="primary"onClick={() => {
                    console.log("delete");
                  }}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    );
}

export default Cart;
