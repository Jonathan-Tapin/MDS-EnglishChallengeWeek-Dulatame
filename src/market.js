import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Modal, Image } from "react-bootstrap";
import Artisant from "./myEvents";
import './market.css'

function Catalog() {

    const [showModal, setShowModal] = useState(false);
    const [unArticle, setUnArticle] = useState({});
    const modalClose = () => setShowModal(false);
    const modalOpen = (index) => {
    setShowModal(true);
    setUnArticle(index);
   };

   const allArticles = []
   for (var myArtisant in Artisant) {
     for (var myArticle in Artisant[myArtisant].articles) {
       allArticles.push(Artisant[myArtisant].articles[myArticle]);
     }
   }


  return (
    <div>


      <Container>
      <h2>All products</h2>
      <Row>
        {allArticles.map((dat) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={dat.img} />
              <Card.Body>
                <Card.Title>{dat.label}</Card.Title>
                <Card.Text>{dat.desc}</Card.Text>
                <Card.Text>{dat.price+" £"} </Card.Text>
                <Button variant="primary"onClick={() => {
                  modalOpen(dat)
                }}>
                  See more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={modalClose} size="lg">

        <Modal.Header closeButton>
                  <Modal.Title>{ unArticle.label}</Modal.Title>
        </Modal.Header>

          <Modal.Body>
            <Image src={unArticle.img} thumbnail />
            <p>{"Category : " + unArticle.cat}</p>
            <p>{"Description : " + unArticle.desc}</p>
            <p>{"Quantity left : " + unArticle.qt}</p>
            <p>{ "Price : " + unArticle.price + " £"}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modalClose}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
    </div>
  );
}

export default Catalog;
