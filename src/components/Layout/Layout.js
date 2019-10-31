import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <Aux>
    <div>
      <Toolbar />
      {/* <div><img src={logo} alt='logo' width='100px'/></div> */}
      <main className={classes.Content}>{props.children}</main>
    </div>
  </Aux>
);

export default layout;
