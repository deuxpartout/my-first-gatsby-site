import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { Card, Button, Offcanvas, Row, Col, Container } from 'react-bootstrap'

const CarouselPosts = ({ data }) => {
  const [show, setShow] = useState(false);
  const [currentPost, setCurrentPost] = useState({ title: "", excerpt: "", slug: "" });

  const handleClose = () => setShow(false);
  const handleShow = (post) => {
    setCurrentPost(post);
    setShow(true);
  };

  return (
    <div>
      <Container fluid>
        <Row className="g-4">
          {data.allWpPost.nodes.map((post, index) => (
            <Col xs={12} md={4} key={index}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  <Button variant="primary" onClick={() => handleShow(post)}>
                    Leggi di più
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: '75vw' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{currentPost.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div dangerouslySetInnerHTML={{ __html: currentPost.excerpt }} />
          <Link to={`/blog/${currentPost.slug}`} className="btn btn-primary mt-3">
            Vai al post completo
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

// Query GraphQL per ottenere tutti i post
export const query = graphql`
  query {
  allWpPost {
    nodes {
      title
      excerpt
      slug
    }
  }
}
`;

export default CarouselPosts;
