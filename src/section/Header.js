import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo-white.svg";

const Header = () => {
  const navigate = useNavigate();

  const Services = [
    { id: 'php_section', label: "PHP/MYSQL Development" },
    { id: 'uiux_section', label: "UI/UX Design" },
    { id: 'wordpress_section', label: "WordPress Development" },
    { id: 'ecomm_section', label: "E-Commerce Development" },
    { id: 'cms_section', label: "CMS & MVC Development" },
    { id: 'api_section', label: "API Development" },
    { id: 'mainsup_section', label: "Maintenance and Support" },
  ];

  const serviceNav = (id) => {
    navigate("/service", { state: Services[id] });
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="VIVID WEB SOLUTIONS" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Service" id="basic-nav-dropdown">
              {Services.map((service, idx) => (
                <NavDropdown.Item onClick={() => serviceNav(idx)} key={idx}>
                  {service.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/career">Career</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
