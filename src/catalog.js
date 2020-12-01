import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Modal } from "react-bootstrap";
import Artisant from "./myEvents";

function Catalog() {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
    const unArtisant = Artisant[id];
    const [idArticle, setIdArticle] = useState('0');

  const [showModal, setShowModal] = useState(false);
  const modalClose = () => setShowModal(false);
 const modalOpen = (index) => {
    setShowModal(true);
    setIdArticle(index);
   };

  return (
    <Container>
      <h1>{unArtisant.title}</h1>
      <p>
        <span>{unArtisant.desc}</span>
        <br />
        Velit consequat sit aliquip elit est. Sunt irure do enim sint labore est
        excepteur anim ipsum excepteur veniam non do. Ipsum fugiat cillum sint
        tempor mollit magna. Irure ea do ullamco consectetur proident qui irure.
        Ullamco consequat nisi culpa minim est Lorem esse enim cupidatat esse
        laborum voluptate irure culpa. Dolor dolor ipsum anim eiusmod incididunt
        consequat fugiat aliquip commodo laboris sit. Tempor reprehenderit do eu
        amet incididunt aute eu. Cupidatat nulla sint sint tempor aliqua aliqua
        fugiat. Magna do reprehenderit ex anim do ullamco ea eiusmod.
        Exercitation occaecat consequat excepteur id ullamco laborum nostrud
        duis dolore aliqua reprehenderit cupidatat do. Do adipisicing commodo
        exercitation eu enim id velit. Aliqua id labore culpa sunt.
      </p>

      <Row>
        {unArtisant.articles.map((dat) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={dat.img} />
              <Card.Body>
                <Card.Title>{dat.label}</Card.Title>
                <Card.Text>{dat.desc}</Card.Text>
                <Card.Text>{dat.price}</Card.Text>
                <Button variant="primary"onClick={() => {
                  modalOpen(dat.id)
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
                  <Modal.Title>{ unArtisant.articles[idArticle].label}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
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
  );
}

export default Catalog;
