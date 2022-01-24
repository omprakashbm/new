import { Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import React from "react";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  mainButton: {
    "&:hover": {
      color: "white",
    },
  },
}));

const Navbaar = () => {
  const classes = useStyles();
  return (
    <Navbar
      sticky="top"
      fixed="top"
      expand="lg"
      style={{
        backgroundColor: "white",
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={"/logo.jpg"}
            alt="MOT logo"
            style={{
              width: "160px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ paddingLeft: "10%" }}>
          <Nav className="me-auto">
            <Nav.Link>
              <Button component={NavLink} to="/" color="primary">
                Home
              </Button>
            </Nav.Link>
            <NavDropdown
              title={<Button color="primary">About</Button>}
              id="basic-nav-dropdown"
              color="primary"
            >
              <NavDropdown.Item>
                <Button component={Link} to="/about/mainpage" color="primary">
                  Main Page
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button
                  component={NavLink}
                  to="/about/organization"
                  color="primary"
                >
                  Organization
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button component={NavLink} to="/about/contact" color="primary">
                  Contact
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button component={NavLink} to="/about/leads" color="primary">
                  Management
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button component={NavLink} to="/about/members" color="primary">
                  Member
                </Button>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>
              <Button component={NavLink} to="/infographics" color="primary">
                Infographics
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button component={NavLink} to="/hospital" color="primary">
                Hospitals
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button component={NavLink} to="/donation" color="primary">
                Donate
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button component={NavLink} to="/apply" color="primary">
                Join Us
              </Button>
            </Nav.Link>
            {/* <NavDropdown
              title={<Button color="primary">News & Resources</Button>}
              id="basic-nav-dropdown"
              color="primary"
            >
              <NavDropdown.Item>
                <Button
                  component={Link}
                  to="/newsresource/announcement"
                  color="primary"
                >
                  Announcement
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button
                  component={NavLink}
                  to="/newsresource/news"
                  color="primary"
                >
                  News
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button
                  component={NavLink}
                  to="/newsresource/videos"
                  color="primary"
                >
                  Videos
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button
                  component={NavLink}
                  to="/newsresource/article"
                  color="primary"
                >
                  Articles
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Button
                  component={NavLink}
                  to="/newsresource/more"
                  color="primary"
                >
                  More
                </Button>
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link>
              <Button
                className={classes.mainButton}
                component={NavLink}
                to="/request"
                color="primary"
                variant="contained"
              >
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
