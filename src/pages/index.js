import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import CarouselPosts from '../components/CarouselPosts'

const IndexPage = ({ data }) => {
  return (
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="La faggeta secolare della Foresta Umbra, Gargano"
        src="../images/L1000288-2.jpg"
        />
        <CarouselPosts data={data} />
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
`;

export const Head = () => <Seo title="Home Page" />

export default IndexPage