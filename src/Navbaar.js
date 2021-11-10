import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import clsx from "clsx";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Tab,
} from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const Navbaar = () => {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{
        backgroundColor: "white",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={"/logo.jpg"}
            alt="MOT logo"
            style={{
              width: "50%",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Button component={NavLink} exact to="/" color="primary">
                Home
              </Button>
            </Nav.Link>
            <NavDropdown
              title={<Button color="primary">About</Button>}
              id="basic-nav-dropdown"
              color="primary"
            >
              <NavDropdown.Item>
                <Button
                  component={Link}
                  exact
                  to="/about/mainpage"
                  color="primary"
                >
                  About
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button
                  component={NavLink}
                  exact
                  to="/about/organization"
                  color="primary"
                >
                  Organization
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button
                  component={NavLink}
                  exact
                  to="/about/contact"
                  color="primary"
                >
                  Contact
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button
                  component={NavLink}
                  exact
                  to="/about/leads"
                  color="primary"
                >
                  Lead
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button
                  component={NavLink}
                  exact
                  to="/about/members"
                  color="primary"
                >
                  Member
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Button component={NavLink} exact to="/hospital" color="primary">
                Hospitals
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button component={NavLink} exact to="/donation" color="primary">
                Donate
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button component={NavLink} exact to="/apply" color="primary">
                Join Us
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button component={NavLink} exact to="/request" color="primary">
                Request Help
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbaar;
