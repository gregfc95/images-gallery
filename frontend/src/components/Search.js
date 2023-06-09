import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

//props
const Search = ({ word, setWord, handleSearchSubmit }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {/* onsubmit itll be called every time its clicked */}
          <Form onSubmit={handleSearchSubmit}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for new image"
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
