import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import Artisant from "./myEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./catalog.css";
import "./cards.css";
import "./modal.css";

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

  const buyCard = (article) => {
    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem("mycart")) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(article);
    // Alert the array value
    console.log(a); // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem("mycart", JSON.stringify(a));
    setShowModal(false);
  };

  return (
    <div>
      <div className="presentation">
        <Row className="txt-presentation">
          <Col>
            <h1>{unArtisant.title}</h1>
            <p>{unArtisant.presentation}</p>
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
            <button type="button" className="btn btn-link text-dark">
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
                  <Card.Img
                    className="img-detail"
                    variant="top"
                    src={dat.img}
                  />
                  <Card.Title>{dat.label}</Card.Title>
                  <Card.Text>{dat.desc}</Card.Text>
                  <Card.Text>{dat.price + " £"} </Card.Text>
                  <Button
                    className="btn-card"
                    onClick={() => {
                      modalOpen(dat);
                    }}
                  >
                    See more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={modalClose} size="lg">

          <div className="modal-div">
<Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Modal.Title>{myArticle.label}</Modal.Title>
            <p className="price">{myArticle.price + " £"}</p>
            <div className="bloc-img">
              <div>
                <Image className="img-modal" src={myArticle.img} thumbnail />
              </div>
              <div>
                <p>{"Description : " + myArticle.desc}</p>
                <p>{"Category : " + myArticle.cat}</p>
                <p>{"Quantity left : " + myArticle.qt}</p>
              </div>
            </div>
            <div className="bloc-btn">
              <Button
                onClick={() => {
                  buyCard(myArticle);
                }}
              >
                Add to cart
              </Button>
            </div>
          </Modal.Body>

          </div>
          
        </Modal>
      </Container>
    </div>
  );
}

export default Catalog;
