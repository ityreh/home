import React from 'react';
import { Container } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <Container>
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQ</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">AGB</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Datenschutz</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Impressum</a></li>
                    </ul>
                    <p class="text-center text-muted">© 2021 Ityreh, Langenselbold</p>
                </footer>
            </Container>
        );
    }
}

export default Footer;
