import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../logo.svg";
import "./index.css";

const Header = ({ handleFilterChange, activeFilter }) => {
  const filters = ["All", "women", "sports", "pop-culture"];
  return (
    <div className="header">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              style={{ width: "100px", height: "100px" }}
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="">
            <Nav>
              {filters.map((filter) => (
                <Nav.Link onClick={() => handleFilterChange(filter)}>
                  {filter.split("-").join(" ")}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
