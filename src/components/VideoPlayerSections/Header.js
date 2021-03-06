import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

import { useSelector } from "react-redux";

const logoUrl =
  "url(https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg)";

const useStyles = makeStyles((theme) => ({
  appbar: {
    color: "#3f51b5",
    backgroundColor: "white",
    height: 51,
  },
  tollbar: {
    paddingLeft: theme.spacing(2),
    minHeight: 51,
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  right: {
    flex: 1,
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    alignSelf: "flex-start",
  },
  account: {
    marginLeft: 18,
  },
  logo: {
    width: 92,
    height: 25,
    backgroundImage: logoUrl,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition: "center",
  },
  cursor: {
    cursor: "pointer",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: "#00579c",
    fontSize: 12,
  },
  notSignIn: {
    flex: 1,
    alignSelf: "flex-start",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btn: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header({ openSearch, openMenu }) {
  const classes = useStyles();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  const handleOpen = () => {
    openSearch();
  };

  const handleOpenMenu = () => {
    openMenu();
  };

  return (
    <AppBar
      position="static"
      variant="outlined"
      color="default"
      className={classes.appbar}
    >
      <Toolbar disableGutters className={classes.tollbar}>
        <Link to="/" component={NavLink}>
          <div className={classes.logo}></div>
        </Link>
        {isAuthenticated ? (
          <div className={classes.right}>
            <SearchIcon className={classes.cursor} onClick={handleOpen} />

            <IconButton
              aria-haspopup="true"
              onClick={handleOpenMenu}
              className={classes.account}
            >
              <MoreVertIcon />
            </IconButton>
          </div>
        ) : (
          <div className={classes.notSignIn}>
            <IconButton onClick={handleOpen}>
              <SearchIcon />
            </IconButton>
            <IconButton onClick={handleOpenMenu}>
              <MoreVertIcon />
            </IconButton>
            <Button
              className={classes.btn}
              variant="outlined"
              color="primary"
              startIcon={<AccountCircleIcon />}
              component={NavLink}
              to={{ pathname: "/login", state: { from: location.pathname } }}
            >
              Sign in
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
