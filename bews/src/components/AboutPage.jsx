import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img
            src="https://via.placeholder.com/300"
            alt="Foto"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h1>Header</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            condimentum tortor vitae purus molestie, ut efficitur neque
            fermentum. Suspendisse potenti.
          </p>
          <p>
            Sed commodo dolor ac justo hendrerit, vel consequat lectus
            ultrices. Maecenas posuere, sem nec luctus fermentum, ligula
            turpis vestibulum enim.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
