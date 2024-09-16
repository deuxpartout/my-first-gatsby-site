// Step 1: Import React
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
    return (
      <Layout pageTitle="Latests">
        {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/news/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.frontmatter.date}</p>
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
        slug
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="Latests" />

export default BlogPage