import Header from "./Header";
import Stopwatch from "../features/stopwatch/Stopwatch";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Layout = () => {
    return (
        <div className="App">
            <main>
                <Header />
                <Container className="content-container">
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <Stopwatch />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </main>
        </div>
    );
};

export default Layout;
