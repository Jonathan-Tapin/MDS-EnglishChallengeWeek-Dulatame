import React from "react";
import  Artisant  from "./myEvents";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

function Home() {
  return (
    <div className="container">
      <div>
        <h1>Santa Market</h1>
        <p>
          Velit consequat sit aliquip elit est. Sunt irure do enim sint labore
          est excepteur anim ipsum excepteur veniam non do. Ipsum fugiat cillum
          sint tempor mollit magna. Irure ea do ullamco consectetur proident qui
          irure. Ullamco consequat nisi culpa minim est Lorem esse enim
          cupidatat esse laborum voluptate irure culpa. Dolor dolor ipsum anim
          eiusmod incididunt consequat fugiat aliquip commodo laboris sit.
          Tempor reprehenderit do eu amet incididunt aute eu. Cupidatat nulla
          sint sint tempor aliqua aliqua fugiat. Magna do reprehenderit ex anim
          do ullamco ea eiusmod. Exercitation occaecat consequat excepteur id
          ullamco laborum nostrud duis dolore aliqua reprehenderit cupidatat do.
          Do adipisicing commodo exercitation eu enim id velit. Aliqua id labore
          culpa sunt.
        </p>
      </div>
      <Container>
          <Row>
        {Artisant.map((dat) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={ dat.img } />
                <Card.Body>
                            <Card.Title>{ dat.title}</Card.Title>
                  <Card.Text>
                   { dat.desc}
                  </Card.Text>
                        <Button variant="primary" href={"/catalog?id="+ dat.id}>See more</Button>
                </Card.Body>
              </Card>
            </Col>
        ))}
          </Row>
      </Container>
    </div>
  );
}

export default Home;
