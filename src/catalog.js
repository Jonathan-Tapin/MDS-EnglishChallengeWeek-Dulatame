import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Modal, Image } from "react-bootstrap";
import Artisant from "./myEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './catalog.css'
import './cards.css'

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
          <Row className="txt-presentation">
            <Col >
            <h1>{unArtisant.title}</h1>
              <p>
                {unArtisant.presentation}
              </p>
            </Col>
            <Col className="col-img">
            <Image className="img-artisan" src={unArtisant.img}></Image>
            </Col>
          </Row>
      </div>
      <div className="search-area">
        <h1>Find the perfect gift !</h1>
        <div className="input-group mb-4 border rounded-pill p-1">
          <input
            id="inputSearch"
            type="search"
            placeholder="Game cards, Doll ..."
            aria-describedby="button-addon3"
            className="form-control bg-none border-0"
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-link text-dark"
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </div>
        </div>
      </div>

      <Container>
        <h2> - Discover our product -</h2>
      <Row>
        {unArtisant.articles.map((dat) => (
          <Col>
            <Card className="card-detail" style={{ width: "18rem" }}>
              <Card.Body className="body-detail">
              <Card.Img className="img-detail" variant="top" src={dat.img} />
                <Card.Title>{dat.label}</Card.Title>
                <Card.Text>{dat.desc}</Card.Text>
                <Card.Text>{dat.price+" £"} </Card.Text>
                <Button className="btn-card" onClick={() => {
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
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
}

export default Catalog;
