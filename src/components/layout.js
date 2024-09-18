import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import { blocco_A } from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
    siteMetadata {
      title
      siteUrl
      description
    }
  }
}
  `)

  return (
    <Container fluid>
      <header>

      </header>
      <main>
        <Row className={blocco_A}>
          <Col>
          <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.pugliasounds.it/wp-content/uploads/2024/07/Cristiana-Verardo-2.webp" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">News</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.pugliasounds.it/wp-content/uploads/2024/07/Cristiana-Verardo-2.webp" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.pugliasounds.it/wp-content/uploads/2024/07/Cristiana-Verardo-2.webp" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
          </Col>
        </Row>
      </main>
      <footer>
        
      </footer>
    </Container>
  )
}

export default Layout