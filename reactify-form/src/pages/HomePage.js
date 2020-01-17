import React from "react";
import AuthContext from "../AuthContext";
import { NavLink, withRouter } from "react-router-dom";


class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static contextType = AuthContext;

  componentDidMount() {
    const authContext = this.context;

    if (!authContext.currentUser) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="login-page-container">
        <h1>HOME PAGE</h1>
        <div>
            <h2>Whats Up My Glip Glops?!</h2>
            </div>
            <button onClick={this.handleLogout}>Logout</button>
                <NavLink to="/LoginPage"></NavLink>
              </div>
      
  );
  }
}
export default withRouter(HomePage);
