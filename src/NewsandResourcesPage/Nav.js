import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  nav: {
    [theme.breakpoints.up("md")]: {
      margin: 0,
      alignItems: "center",
      width: "100%",
      paddingRight: "50px",
    },
  },
}));

const Nav = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar
        className={classes.nav}
        color="primary"
        position="static"
        style={{ height: "55px" }}
      >
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
          >
            <Tab
              label="Announcement"
              component={Link}
              to={"/newsresource/announcement"}
            ></Tab>
            <Tab label="NEWS" component={Link} to={"/newsresource/news"}></Tab>
            <Tab
              label="VIDEOS"
              component={Link}
              to={"/newsresource/videos"}
            ></Tab>
            <Tab
              label="ARTICLES"
              component={Link}
              to={"/newsresource/article"}
            ></Tab>
            <Tab label="MORE" component={Link} to={"/newsresource/more"}></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
