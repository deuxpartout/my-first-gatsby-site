// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
    return (
      <Layout pageTitle="Latests">
        {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <p>{node.frontmatter.date}</p>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.excerpt}</p>
          </article>
        ))
        }
      </Layout>
    )
  }

export const query = graphql `
  query {
  allMdx(sort: {frontmatter: {date: ASC}}) {
    nodes {
      frontmatter {
        date(formatString: "D MMMM YYYY")
        title
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="Latests" />

export default BlogPage