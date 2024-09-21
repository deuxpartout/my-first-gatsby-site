import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import 'bootstrap/dist/css/bootstrap.min.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <Row xs={1} md={3} className="g-4">
      {
        data.allMdx.nodes.map((node) => (
        <Col key={node.id}>
        <Card>
          <article key={node.id}>
          <Card.Img variant="top" src={node.frontmatter.featureImage} />
          <Card.Body>
            <Card.Title>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
            </Card.Title>
          <Card.Text>
            {node.excerpt}
            <p>{node.frontmatter.date}</p>
          </Card.Text>
          </Card.Body>
          </article>
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
  allMdx(sort: {frontmatter: {date: DESC}}, limit: 4) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        featureImage
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage