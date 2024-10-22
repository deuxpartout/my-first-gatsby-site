import * as React from 'react'
import { Link } from 'gatsby'
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
    return (
        <Container>
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