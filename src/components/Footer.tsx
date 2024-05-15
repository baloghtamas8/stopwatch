import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const actualYear = new Date().getFullYear();

const Footer = () => {
    return (
        <Navbar fixed="bottom" className="bg-body-tertiary">
            <Container>
                <Navbar.Text>©{actualYear} Tamás Balogh | v0.1.0</Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Footer;
