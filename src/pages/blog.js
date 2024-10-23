import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const BlogPage = ({ data }) => {
 
  return (
    <Layout pageTitle="My Blog Posts">
      <Row xs={1} md={3} className="g-1">
        {
            data.allWpPost.nodes.map(node => (
                <Col key={node.title}>
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> 
                                <Link to={`${node.slug}`}>
                                {node.title}
                                </Link>
                            </Card.Title>
                            <Card.Text>
                            {node.excerpt}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))
        }
      </Row>
    </Layout>
  )
}

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
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage