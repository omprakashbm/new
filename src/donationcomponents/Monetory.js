import React, { useContext } from "react";
import { LanguageContext } from "../App";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const mainProps = {
  style: {
    display: "flex",
    flexGrow: 1,
    color: "#0D6199",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",

    textAlign: "center",
    fontSize: "3rem",
  },
};

const homeProps = {
  style: {
    display: "flex",
    flexGrow: 1,
    color: "#0D6199",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    textAlign: "center",
    fontSize: "3rem",
  },
};
const testProps = {
  style: {
    paddingBottom: "2rem",
    paddingTop: ".5rem",
  },
};
const circleProps = {
  m: 5,
  style: {
    backgroundColor: "white",
    width: "17rem",
    height: 400,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#0D6199",
    boxShadow: "5px 10px 18px #888888",
    fontSize: "3rem",
  },
};
const useStyles = makeStyles((theme) => ({
  logo: {
    height: 400,
    maxWidth: 260,
  },
}));
const Monetory = () => {
  const classes = useStyles();

  const language = useContext(LanguageContext);
  let homeData = {
    titleen: "eng title",
    titlenp: "np title",
  };
  return (
    <>
      {/* {homeData[`title${language}`]} */}
      <Box {...mainProps}>
        <Box borderRadius="0%" {...homeProps}>
          <Typography gutterBottom variant="h4" component="h2">
            National
          </Typography>
          <Box borderRadius="0%" {...testProps}>
            <Box borderRadius="5%" {...circleProps}>
              <img src={"/fonepay.png"} alt="ecg" className={classes.logo} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Monetory;
