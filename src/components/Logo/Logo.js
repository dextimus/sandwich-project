import React from "react";
import sandwichLogo from "../../assets/images/Logo.png";
import classes from './Logo.css';

const logo = props => (
  <div className={classes.Logo}>
    <img src={sandwichLogo} alt='My_sandwich' />
  </div>
);

export default logo;
