import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

import { district } from "./data/district";
import { province } from "./data/province";

import Button from "@material-ui/core/Button";
import { BiDownload } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {
    "&:hover": {
      backgroundColor: "#ededed",
    },
  },
}));

const FilterDownload = () => {
  const classes = useStyles();

  const [suggestion, setSuggestion] = useState([]);
  const [suggestionP, setSuggestionP] = useState([]);
  const [text, setText] = useState("");
  const [textP, setTextP] = useState("");

  const handleChange = (text) => {
    let matches = [];

    if (text.length > 0) {
      matches = district.filter((dist) => {
        const regex = new RegExp(`${text}`, "i");
        return dist.name.match(regex);
      });
    }
    setSuggestion(matches);
    setText(text);
  };

  const suggestipnHandler = (text) => {
    setText(text);
    setSuggestion([]);
  };

  const suggestionHandlerP = (text) => {
    setTextP(text);
    setSuggestionP([]);
  };

  const handleChangeP = (text) => {
    let matchesP = [];

    if (text.length > 0) {
      matchesP = province.filter((pro) => {
        const regex = new RegExp(`${text}`, "i");
        return pro.name.match(regex);
      });
    }
    setSuggestionP(matchesP);
    setTextP(text);
  };

  return (
    <div className={classes.main}>
      <div clasName="container">
        <input
          placeholder="Enter District Name!"
          style={{ color: "hsl(205,78%, 35%)", marginRight: "10px" }}
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={() => {
            setTimeout(() => {
              setSuggestion([]);
            }, 100);
          }}
        />

        {suggestion &&
          suggestion.map((item, i) => (
            <li
              onClick={() => suggestipnHandler(item.name)}
              key={i}
              className={classes.item}
              style={{ listStyle: "none", cursor: "pointer" }}
            >
              {item.name}
            </li>
          ))}
        <Button
          endIcon={<BiDownload />}
          variant="contained"
          color="primary"
          style={{}}
        >
          Downlod
        </Button>
      </div>

      <div clasName="container">
        <input
          placeholder="Enter Province Name!"
          style={{
            color: "hsl(205,78%, 35%)",
            marginRight: "10px",
            height: "35px",
          }}
          type="text"
          value={textP}
          onChange={(e) => handleChangeP(e.target.value)}
          onBlur={() => {
            setTimeout(() => {
              setSuggestionP([]);
            }, 100);
          }}
        />

        {suggestionP &&
          suggestionP.map((item, i) => (
            <li
              key={i}
              className={classes.item}
              style={{ listStyle: "none", cursor: "pointer" }}
              onClick={() => suggestionHandlerP(item.name)}
            >
              {item.name}
            </li>
          ))}
        <Button
          endIcon={<BiDownload />}
          variant="contained"
          color="primary"
          size="medium"
        >
          Downlod
        </Button>
      </div>
    </div>
  );
};

export default FilterDownload;
