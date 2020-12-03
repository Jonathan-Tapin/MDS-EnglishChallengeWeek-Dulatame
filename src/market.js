import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Modal, Image } from "react-bootstrap";
import Artisant from "./myEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './market.css'
import './cards.css'

function Market() {

    let url = new URL(window.location.href);
    const mySearch = url.searchParams.get("search");

    const [showModal, setShowModal] = useState(false);
    const [unArticle, setUnArticle] = useState({});
    const modalClose = () => setShowModal(false);
    const modalOpen = (index) => {
    setShowModal(true);
    setUnArticle(index);
    localStorage.setItem('cart', JSON.stringify(index));
   };

  const buyCard = (article) => {
    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('mycart')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(article);
    // Alert the array value
    console.log(a); // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('mycart', JSON.stringify(a));
    setShowModal(false);
  };

   const allArticles = []
   for (var myArtisant in Artisant) {
     for (var myArticle in Artisant[myArtisant].articles) {
       allArticles.push(Artisant[myArtisant].articles[myArticle]);
     }
   }

const onKeyUp = (event) => {
    if (event.key === "Enter") {
      window.location.href =
        "/market?search=" + document.getElementById("inputSearch").value;
    }
  };

  return (
    <div>
      <div className="presentation">
        <div className="txt-presentation">
        <h1>Catalog</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in tristique tortor. Vestibulum auctor nisl non consequat euismod. Donec aliquet fermentum augue eget auctor. Aliquam eros sem, eleifend eu pretium at, tempor ac sem. Donec elit libero, dictum non auctor quis, accumsan nec urna. Vivamus aliquam consequat enim, vitae consectetur nibh porttitor eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt odio a lectus rutrum imperdiet. 
              </p>
        </div>
      </div>
     <div className="search-area">
        <h1>Find the perfect gift !</h1>
        <div className="input-group mb-4 border rounded-pill p-1">
          <input
            id="inputSearch"
            onKeyPress={onKeyUp}
            type="search"
            placeholder="Game cards, Doll ..."
            aria-describedby="button-addon3"
            className="form-control bg-none border-0"
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-link text-dark"
              onClick={() => {
                window.location.href =
                  "/market?search=" +
                  document.getElementById("inputSearch").value;
              }}
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </div>
        </div>
      </div>

      <Container>
      <h2>- All products - </h2>
      <Row>
        {allArticles.filter((data)=>{
      if(mySearch == null){
        //console.log("null");
        return data
      }
      else if(data.label.toLowerCase().includes(mySearch.toLowerCase()) || data.desc.toLowerCase().includes(mySearch.toLowerCase()) || data.cat.toLowerCase().includes(mySearch.toLowerCase())){
          return data
      }
      else {
        return null
      }
    }).map((dat) => (
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
          <Button variant="primary" onClick={() => {
            buyCard(unArticle);
          }}>
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
    </div>
  );
}

export default Market;
