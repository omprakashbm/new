import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Home from "./pages/Home";
import RequestHelp from "./pages/RequestHelp";
import ApplyMember from "./pages/ApplyMember";
import Navbaar from "./Navbaar";
import NotFound from "./pages/404NotFound";
import NewsResources from "./pages/NewsResources";
import Footer from "./Footer";
import Lead from "./aboutcomponents/Lead";
import Member from "./aboutcomponents/Member";
import Donation from "./pages/Donation";
import Hospital from "./pages/Hospitals";
import OxygenConcentratorTested from "./pages/OxygenConcentratorTested";
import RequestSolved from "./pages/RequestSolved";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./aboutcomponents/MainPage";
import Organization from "./aboutcomponents/Organization";
import Contact from "./aboutcomponents/Contact";

const useStyles = makeStyles((theme) => ({
  languageCss: {
    display: "flex",
    justifyContent: "flex-end",
  },
  formControl: {
    margin: theme.spacing(1),
    width: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const theme = createTheme({
  palette: {
    primary: {
      main: "#0D6199", //#3b6ba5
    },
    secondary: {
      main: "#72a5d3",
    },
  },
});
const LanguageContext = React.createContext();

function App() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState("en");

  const handleChange = (event) => {
    console.log(event.target.value);
    setLanguage(event.target.value);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <LanguageContext.Provider value={language}>
            <Navbaar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about/mainpage">
                <MainPage />
              </Route>
              <Route exact path="/request">
                <RequestHelp />
              </Route>
              <Route exact path="/apply">
                <ApplyMember />
              </Route>
              <Route exact path="/newsresources">
                <NewsResources />
              </Route>
              <Route exact path="/donation">
                <Donation />
              </Route>
              <Route exact path="/about/organization">
                <Organization />
              </Route>
              <Route exact path="/about/leads">
                <Lead />
              </Route>
              <Route exact path="/about/members">
                <Member />
              </Route>
              <Route exact path="/about/contact">
                <Contact />
              </Route>
              <Route exact path="/hospital">
                <Hospital />
              </Route>
              <Route exact path="/oc">
                <OxygenConcentratorTested />
              </Route>
              <Route exact path="/RS">
                <RequestSolved />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </LanguageContext.Provider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export { App, LanguageContext };
