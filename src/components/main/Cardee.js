import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const Cardee = ({ bilgi }) => {
  return (
    <Container className=" ana-ekran">
      <Row className="text-center g-3">
        {bilgi.map(({ id, title, date, desc, image }) => (
          <Col
            key={id}
            className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mt-5"
          >
            <Card
              style={{
                width: "25rem",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Card.Title className="title">{title}</Card.Title>
              <Card.Subtitle className="mb-2  date">{date}</Card.Subtitle>

              <Card.Body className="text-kutu">
                <Card.Text className="hidden align-items-end">{desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {/* arrow (map) süslü kullandığında return ister.reactta süslü koymayabilirsiniz, o zaman returne de ihtiyaç olmaz */}
      </Row>
    </Container>
  );
};

export default Cardee;
