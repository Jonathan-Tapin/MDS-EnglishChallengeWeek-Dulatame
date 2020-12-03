import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Cart() {

  const [cartContent, setCartContent] = useState(JSON.parse(localStorage.getItem('mycart')) || []);

  function getTotalPrice(table){
    let total = 0;
    for (var id in table) {
      total += table[id].price;
    }
    return total.toFixed(2);
  };

  const [totalPrize, setTotalPrize] = useState(getTotalPrice(cartContent));


  const deleteCard = (article) => {
    let a = [];
    let b = [];

    a = JSON.parse(localStorage.getItem('mycart')) || [];

    b = a.filter(function(value, index, arr){
        return value.label !== article.label;
    });

    //console.log(a);
    //console.log(b);
    localStorage.setItem('mycart', JSON.stringify(b));
    setCartContent(JSON.parse(localStorage.getItem('mycart')) || []);
    setTotalPrize(getTotalPrice(b));
  };

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
                    deleteCard(dat);
                  }}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <p>Total : {totalPrize} £</p>
      </Container>
      </div>
    );
}

export default Cart;
