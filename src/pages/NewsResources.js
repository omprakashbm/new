import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { fetchURL } from "../apiComponents/FetchComponent";
import Announcement from "../NewsandResourcesPage/Announcement";

import Articles from "../NewsandResourcesPage/Articles";
import More from "../NewsandResourcesPage/More";
import Videos from "../NewsandResourcesPage/Videos";
import News from "../NewsandResourcesPage/News";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../NewsandResourcesPage/Nav";
import ApplyMember from "./ApplyMember";

export default function NewsResources() {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let { data } = fetchURL("http://127.0.0.1:8000/about/api/resource/en/");
      setResource(data);
    };
    getData();
  }, []);

  let category;
  return <div></div>;
}
