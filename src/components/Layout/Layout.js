import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    sideDrawer: false
  };

  sideDrawerClosed = () => {
    this.setState({ sideDrawer: false });
  };

  sideDrawerToggle = () => {
    this.setState(prevState => {
      return { sideDrawer: !prevState.SideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <div>
          <Toolbar drawerToggleClicked={this.sideDrawerToggle} />
          <SideDrawer
            closed={this.sideDrawerClosed}
            open={this.state.sideDrawer}
          />
          {/* <div><img src={logo} alt='logo' width='100px'/></div> */}
          <main className={classes.Content}>{this.props.children}</main>
        </div>
      </Aux>
    );
  }
}

export default Layout;
