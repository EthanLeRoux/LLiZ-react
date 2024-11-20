import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css'
import logo from './assets/logo.png';  // Import your logo image
function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={"/"} className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="LLiZ Logo"
                        className="LogoImage"
                        height={"50px"}
                        width={"auto"}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                        <Nav.Link as={Link} to={"/grammar"}>Grammar</Nav.Link>
                        <Nav.Link as={Link} to={"/res"}>Resources</Nav.Link>
                        <Nav.Link as={Link} to={"/blogmaker"}>Blog Maker</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
