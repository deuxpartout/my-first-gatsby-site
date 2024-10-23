import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { 
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
        }
      }
    }
    `)
    return (
        <Container>
            <Row>
                <header>{data.site.siteMetadata.title}</header>
            </Row>
            <Row>
                <Col>
                    <nav>
                        <ul className={navLinks}>
                            <li className={navLinkItem}>
                                <Link to="/" className={navLinkText}>
                                    Home
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/about" className={navLinkText}>
                                    About
                                </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/blog" className={navLinkText}>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
            </Row>
            <main>
                <Row>
                    <Col>
                        <h1>{pageTitle}</h1>
                        {children}
                    </Col>
                </Row>
            </main>
        </Container>
    )
}

export default Layout