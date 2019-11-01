import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    SideDrawer: true
  };

  SideDrawerClosed = () => {
    this.setState({ SideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <div>
          <Toolbar />
          <SideDrawer
            closed={this.SideDrawerClosed}
            open={this.state.SideDrawer}
          />
          {/* <div><img src={logo} alt='logo' width='100px'/></div> */}
          <main className={classes.Content}>{this.props.children}</main>
        </div>
      </Aux>
    );
  }
}

export default Layout;
