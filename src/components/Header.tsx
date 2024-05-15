import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return (
        <Navbar fixed="top" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Stopwatch App</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
