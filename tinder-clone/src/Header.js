import React from "react";
import "./Header.css";
import { Person, Forum, ArrowBackIos } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton
          onClick={() => {
            history.replace(backButton);
          }}
        >
          <ArrowBackIos
            fontSize="large"
            className="header__icon"
          ></ArrowBackIos>
        </IconButton>
      ) : (
        <IconButton>
          <Person fontSize="large" className="header__icon"></Person>
        </IconButton>
      )}

      <Link to="/home">
        <img
          className="header__img"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder logo"
        ></img>
      </Link>
      <Link to="/chat">
        <IconButton>
          <Forum fontSize="large" className="header__icon"></Forum>
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
