import React from 'react';
import { Col, Container } from 'react-bootstrap';
import logo from './logo.svg';

class Jumbotron extends React.Component {
    render() {
        return (
            <Container className="text-center px-4 py-5 my-5">
                <img class="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57" />
                <h1 class="display-5 fw-bold">Ityreh</h1>
                <Col lg="6" className="mx-auto">
                    <p class="lead mb-4">Softwarelösungen nach Clean Code Praktiken und Cloud-native Paradigmen.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Softwarelösungen</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Kontakt</button>
                    </div>
                </Col>
            </Container>
        );
    }
}

export default Jumbotron;
