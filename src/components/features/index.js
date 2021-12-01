import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FileEarmarkCode, Cpu, Tools } from 'react-bootstrap-icons';

class Features extends React.Component {
    render() {
        return (
            <Container className="text-center">
                <Row>
                    <Col>
                        <FileEarmarkCode size={75} align="center" />
                        <h2>Develop</h2>
                        <p>Softwareentwicklung nach State-of-the-Art und Best Practices des Marktes.</p>
                    </Col>
                    <Col>
                        <Cpu size={75} />
                        <h2>Run</h2>
                        <p>Betrieb von Software in der Cloud nach Cloud-native Paradigmen.</p>
                    </Col>
                    <Col>
                        <Tools size={75} />
                        <h2>Maintain</h2>
                        <p>Support und Wartung für Softwarekomponenten.</p>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Features;
