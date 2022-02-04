import React, { useState, useEffect } from "react";
import { Box, Button, makeStyles, Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  paper: {
    boxShadow: " 0 5px 15px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",

    [theme.breakpoints.up("sm")]: {
      margin: "3% 16%",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "3% 25%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "3% 4%",
    },
  },
  top: {
    padding: "10px 15px",
  },

  topbanner: {
    height: "12px",
    backgroundColor: "hsl(205, 78%, 33%)",
    margin: 0,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  InputBox: {
    marginBottom: "5px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px",
    marginBottom: "5px",
  },
}));

const LiveRequest = () => {
  const [data, setData] = useState({
    HospitalName: "",
    fullName: "",
    number: "",
    email: "",
    textArea: "",
    query: "",
  });
  const [check, setCheck] = useState({
    concentrator: false,
    ventilator: false,
    plant: false,
    dialysis: false,
    others: false,
  });
  const [radio, setRadio] = useState("");

  const [province, setProvince] = useState([""]);

  const classes = useStyle();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleChecked = (e) => {
    setCheck({ ...check, [e.target.name]: e.target.checked });
  };

  const handleRadio = (e) => {
    setRadio(e.target.value);
  };

  const clear = () => {
    setData({
      HospitalName: "",
      fullName: "",
      number: "",
      email: "",
      textArea: "",
      query: "",
    });
    setCheck({
      concentrator: false,
      ventilator: false,
      plant: false,
      dialysis: false,
      others: false,
    });
    setRadio("");
    setProvince([""]);
  };

  return (
    <div className={classes.paper}>
      <div className={classes.topbanner}></div>

      <div className={classes.top}>
        <div style={{ marginBottom: "50px" }}>
          <Typography
            variant="h5"
            component="h2"
            style={{ color: "hsl(205, 78%, 33%)", marginBottom: "10px" }}
          >
            Request For Support
          </Typography>
          <Typography variant="body1" color="textSecondary">
            This request for support is open for all the hospitals and health
            centers that are running all over the country for any biomedical
            equipment support needed basically install, operate, repair and
            maintain. You are also requested to fill this form if you need to
            Biomedical Equipment in Donation. We will connect your request to
            our network and try to help you as much as possible.
          </Typography>
        </div>
        <div className={classes.InputBox}>
          <h5 style={{ color: "hsl(205, 78%, 33%)", marginBottom: 5 }}>
            Hospital/Health Center Name
          </h5>
          <FormControl style={{ width: "55%" }} variant="standard">
            <InputLabel htmlFor="component-simple">Plase Enter!</InputLabel>
            <Input
              type="text"
              name="HospitalName"
              value={data.HospitalName}
              onChange={handleChange}
              required
            />
          </FormControl>
        </div>
        <div className={classes.InputBox}>
          <h5 style={{ color: "hsl(205, 78%, 33%)", marginBottom: 0 }}>
            Province
          </h5>

          <FormControl style={{ width: "182px" }}>
            <Select
              id="demo-simple-select"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              required
            >
              <MenuItem value={1}>Province 1</MenuItem>
              <MenuItem value={2}>Pcovince 2</MenuItem>
              <MenuItem value={3}>Bagmati</MenuItem>
              <MenuItem value={4}>Gandaki</MenuItem>
              <MenuItem value={5}>Lumbini</MenuItem>
              <MenuItem value={6}>Karnali</MenuItem>
              <MenuItem value={7}>Sudurpashchim</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.InputBox}>
          <h5 style={{ color: "hsl(205, 78%, 33%)", marginBottom: 5 }}>
            Your Full Name
          </h5>
          <FormControl variant="standard" style={{ width: "55%" }}>
            <InputLabel htmlFor="component-simple">Your Name!</InputLabel>
            <Input
              input="text"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              required
            />
          </FormControl>
        </div>
        <div className={classes.InputBox}>
          <h5 style={{ color: "hsl(205, 78%, 33%)", marginBottom: 5 }}>
            Contact Number
          </h5>
          <FormControl style={{ width: "55%" }} variant="standard">
            <InputLabel htmlFor="component-simple">Your Number!</InputLabel>
            <Input
              type="number"
              name="number"
              value={data.number}
              onChange={handleChange}
              required
            />
          </FormControl>
        </div>
        <div className={classes.InputBox}>
          <h5 style={{ color: "hsl(205, 78%, 33%)", marginBottom: 5 }}>
            Email Address
          </h5>
          <FormControl style={{ width: "55%" }} variant="standard">
            <InputLabel htmlFor="component-simple">Your Email!</InputLabel>
            <Input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </FormControl>
        </div>
        <FormGroup className={classes.InputBox}>
          <h5 style={{ color: "hsl(205, 78%, 33%)" }}>Requested Needed for</h5>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "hsl(205, 78%, 33%)" }}
                checked={check.concentrator}
                onChange={handleChecked}
                name="concentrator"
              />
            }
            label="Oxygen Concentrator"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "hsl(205, 78%, 33%)" }}
                checked={check.ventilator}
                onChange={handleChecked}
                name="ventilator"
              />
            }
            label="Oxygen Ventilator"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "hsl(205, 78%, 33%)" }}
                checked={check.plant}
                onChange={handleChecked}
                name="plant"
              />
            }
            label="Oxygen Plant"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "hsl(205, 78%, 33%)" }}
                checked={check.dialysis}
                onChange={handleChecked}
                name="dialysis"
              />
            }
            label="Dialysis Machine"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "hsl(205, 78%, 33%)" }}
                checked={check.others}
                onChange={handleChecked}
                name="others"
              />
            }
            label="Others"
          />
        </FormGroup>
        <div className={classes.InputBox}>
          <h5 style={{ color: "hsl(205, 78%, 33%)" }}>
            What kind of support are you looking for? Share us your challenges.
          </h5>
          <FormControl fullWidth variant="standard">
            <TextareaAutosize
              name="textArea"
              value={data.textArea}
              onChange={handleChange}
              placeholder="Your Answer"
              style={{ height: 100, fontSize: "20px" }}
            />
          </FormControl>
        </div>
        <div className={classes.InputBox}>
          <h5 style={{ color: "hsl(205, 78%, 33%)" }}>
            How soon would you want this support?
          </h5>
          <FormControl component="fieldset">
            <RadioGroup value={radio} onChange={handleRadio}>
              <FormControlLabel
                value="days"
                control={<Radio style={{ color: "hsl(205, 78%, 33%)" }} />}
                label="within 2 days"
              />
              <FormControlLabel
                value="week"
                control={<Radio style={{ color: "hsl(205, 78%, 33%)" }} />}
                label="Within a week"
              />
              <FormControlLabel
                value="month"
                control={<Radio style={{ color: "hsl(205, 78%, 33%)" }} />}
                label="Within a month"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.InputBox}>
          <h5 style={{ color: "hsl(205, 78%, 33%)" }}>
            Anything you would like to share?
          </h5>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="component-simple">Please Enter</InputLabel>
            <Input
              input="text"
              name="query"
              value={data.query}
              onChange={handleChange}
              required
            />
          </FormControl>
        </div>
        <div className={classes.buttons}>
          <Button
            className={classes.button1}
            variant={"contained"}
            color="primary"
          >
            Submit
          </Button>
          <Button
            style={{
              color: "hsl(205, 78%, 40%)",
            }}
            onClick={clear}
          >
            <Link to="/requestform">Clear form </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LiveRequest;
