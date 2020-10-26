import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

import { NavLink } from "react-router-dom";

import TopBar from "./TopBar";
import Video from "./Video";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <TopBar />
      <Video />
      <Typography>Homepage</Typography>
      <Link component={NavLink} to="/watch/dfd">
        watch video
      </Link>
    </>
  );
}
