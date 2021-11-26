import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.svg';

class HomeNavbar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Ityreh
                    </Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default HomeNavbar;
