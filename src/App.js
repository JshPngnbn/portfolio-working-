import "./styles/style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function App() {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg">
        <Container>
          <div className="logo">
            <Navbar.Brand href="#home">josh. </Navbar.Brand>
          </div>
          <div className="show-logo">
            <a href="#action" className="hide">
              works
            </a>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                josh
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 ">
                <Nav.Link className="pe-4" href="#action1">
                  portfolio
                </Nav.Link>
                <Nav.Link href="#action2">say hello</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <div className="homepage">
        <Container>
          <h1>I'm Josh, a web designer.</h1>
          <h2>I develop and enjoy what I do.</h2>
          <button>EXPLORE</button>
        </Container>
      </div>
      <div className="about-wrap">
        <Container>
          <div className="about-box">
            <div className="box-left"></div>
            <div className="box-right"></div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
