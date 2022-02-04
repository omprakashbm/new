import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { postFetchURL } from "../apiComponents/FetchComponent";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },

  topbanner: {
    height: "12px",
    backgroundColor: "hsl(205, 78%, 33%)",
    margin: 0,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },

  button: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    textAlign: "center",
  },

  formControl: {
    display: "flex",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputs: {
    display: "flex",
    justifyContent: "space-between",
  },
  submitbutton: {
    float: "right",
    marginBottom: "20px",
  },
  image: {
    height: "60%",
    width: "50%",
    display: "block",
    marginLeft: 0,
    marginRight: "2%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function ApplyMember() {
  const classes = useStyles();
  const [province, setProvince] = useState("1");
  const [full_name, setFullname] = useState("");
  const [qualifications, setQualifications] = useState("");
  // const [position, setPosition] = useState('');
  const [primary_contact, setPrimary] = useState("");
  const [secondary_contact, setSecondary] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [provinceError, setProvinceError] = useState(false);
  const [fullNameError, setFullNameError] = useState(false);
  const [qualificationsError, setQualificationsError] = useState(false);
  // const [positionError, setPositionError] = useState(false);
  const [primaryError, setPrimaryError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    setProvinceError(false);
    setFullNameError(false);
    setQualificationsError(false);
    setPrimaryError(false);
    // setPositionError(false);
    setEmailError(false);
    setDescriptionError(false);

    e.preventDefault();

    // if (province == '') {
    //   setProvinceError(true);
    // }
    if (full_name === "") {
      setFullNameError(true);
    }
    if (qualifications === "") {
      setQualificationsError(true);
    }
    if (primary_contact === "") {
      setPrimaryError(true);
    }
    // if (position == '') {
    //   setPositionError(true);
    // }
    if (email === "") {
      setEmailError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }

    if (
      full_name &&
      qualifications &&
      primary_contact &&
      email &&
      description
    ) {
      const profilePic = document.getElementById("raised-button-img");
      const resumeFile = document.getElementById("raised-button-file");

      if (!profilePic.files[0]) {
        alert("Please select an image for profile picture!");
      } else if (!resumeFile.files[0]) {
        alert("Please select a file for resume!");
      } else {
        var formData = new FormData();
        formData.append("province", province);
        formData.append("full_name", full_name);
        // formData.append('position', position);
        formData.append("email", email);
        formData.append("primary_contact", primary_contact);
        formData.append("secondary_contact", secondary_contact);
        formData.append("qualifications", qualifications);
        formData.append("description", description);
        formData.append("profile_picture", profilePic.files[0]);
        formData.append("resume", resumeFile.files[0]);
        postFetchURL(
          "https://backend.motdev.ran.org.np/about/api/post_members/",
          formData
        );
      }
      // else if ()
    } else {
    }

    // setTitleError(false);
    // setDetailsError(false);

    // if (province == '') {
    //   setTitleError(true);
    // }
    // if (province == '') {
    //   setDetailsError(true);
    // }
    // if (province && province) {
    //   console.log(province, province);
    // }
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setProvince(event.target.value);
  };

  return (
    <Container size="sm">
      <Card className={classes.root}>
        <div className={classes.topbanner}></div>
        <CardContent style={{ marginRight: "0px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="primary"
            style={{ marginBottom: "20px" }}
          >
            Application Form
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div style={{ display: "flex" }}>
              <div>
                <FormControl
                  variant="filled"
                  style={{ width: "55%", paddingBottom: "10px 0px" }}
                  standardclassName={classes.formControl}
                >
                  <InputLabel htmlFor="filled-age-native-simple">
                    Select Province
                  </InputLabel>
                  <Select native value={province} onChange={handleChange}>
                    <option value={"1"}>Province 1</option>
                    <option value={"2"}>Pcovince 2</option>
                    <option value={"3"}>Bagmati</option>
                    <option value={"4"}>Gandaki</option>
                    <option value={"5"}>Lumbini</option>
                    <option value={"6"}>Karnali</option>
                    <option value={"7"}>Sudurpashchim</option>
                  </Select>
                </FormControl>
                <FormControl
                  style={{ width: "55%", padding: "20px 0px" }}
                  standard
                >
                  <InputLabel>Full Name*</InputLabel>
                  <Input
                    onChange={(e) => setFullname(e.target.value)}
                    label="Full Name"
                    variant="outlined"
                    color="secondary"
                    required
                    error={fullNameError}
                  />
                </FormControl>

                <FormControl
                  style={{ width: "55%", padding: "20px 0px" }}
                  standard
                >
                  <InputLabel>Qualification*</InputLabel>
                  <Input
                    onChange={(e) => setQualifications(e.target.value)}
                    label="Qualifications"
                    variant="outlined"
                    color="secondary"
                    required
                    error={qualificationsError}
                  />
                </FormControl>

                <FormControl
                  style={{ width: "55%", padding: "20px 0px" }}
                  standard
                >
                  <InputLabel>Contact Number* </InputLabel>
                  <Input
                    type="number"
                    className={classes.field}
                    onChange={(e) => setPrimary(e.target.value)}
                    label="Contact Primary"
                    variant="outlined"
                    color="secondary"
                    required
                    error={primaryError}
                  />
                </FormControl>

                <FormControl
                  style={{ width: "55%", padding: "20px 0px" }}
                  standard
                >
                  <InputLabel>Second Contact Number(Optional) </InputLabel>
                  <Input
                    type="number"
                    className={classes.field}
                    onChange={(e) => setSecondary(e.target.value)}
                    label="Contact Secondary"
                    variant="outlined"
                    color="secondary"
                  />
                </FormControl>

                <FormControl
                  style={{ width: "55%", padding: "20px 0px" }}
                  standard
                >
                  <InputLabel>Email Address*</InputLabel>
                  <Input
                    type="email"
                    className={classes.field}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email Address"
                    variant="outlined"
                    color="secondary"
                    required
                    error={emailError}
                  />
                </FormControl>
              </div>
              <img src={"/MainImage.png"} alt="img" className={classes.image} />
            </div>

            <FormControl fullWidth>
              <TextField
                className={classes.field}
                onChange={(e) => setDescription(e.target.value)}
                label="Describe About Yourself"
                variant="outlined"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                required
                error={descriptionError}
                style={{ padding: "10px 0px" }}
              />
            </FormControl>

            <div className={classes.inputs}>
              <input
                accept="image/*"
                className={classes.input}
                style={{ display: "none" }}
                id="raised-button-img"
                type="file"
              />
              <label htmlFor="raised-button-img">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  className={classes.button}
                >
                  Upload Profile Picture
                </Button>
              </label>
              <input
                accept="*"
                className={classes.input}
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  className={classes.button}
                >
                  Upload Resume
                </Button>
              </label>
            </div>

            <Button
              className={classes.submitbutton}
              type="submit"
              color="primary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
