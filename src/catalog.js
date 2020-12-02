import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Modal, Image } from "react-bootstrap";
import Artisant from "./myEvents";
import './catalog.css'

function Catalog() {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
    const unArtisant = Artisant[id];
    const [myArticle, setMyArticle] = useState({});

  const [showModal, setShowModal] = useState(false);
  const modalClose = () => setShowModal(false);
 const modalOpen = (index) => {
    setShowModal(true);
    setMyArticle(index);
   };

  return (
    <div>

      <div className="presentation">
        <div className="txt-presentation">
        <h1>{unArtisant.title}</h1>
              <p>
                {unArtisant.presentation}
              </p>
        </div>
      </div>

      <Container>
      <h2>Our product</h2>
      <Row>
        {unArtisant.articles.map((dat) => (
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
                  <Modal.Title>{ myArticle.label}</Modal.Title>
        </Modal.Header>

          <Modal.Body>
            <Image src={myArticle.img} thumbnail />
            <p>{"Category : " + myArticle.cat}</p>
            <p>{"Description : " + myArticle.desc}</p>
            <p>{"Quantity left : " + myArticle.qt}</p>
            <p>{ "Price : " + myArticle.price + " £"}</p>
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
