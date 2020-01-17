import React from "react";
import AuthContext from "../AuthContext";
import { NavLink, withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Spencer Wright",
      password: "fortheloveofgodpleasework"
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  static contextType = AuthContext;

  handleLogin() {
    const user = this.context.login(this.state.username, this.state.password);
    if (user) {
      this.props.history.push("/home");
    }
  }

  handleRegister() {
      const user = this.context.login(this.state.username, this.state.passwordd);
      if (user) {
          this.props.history.push("/register");
      }
  }

  handleLogout() {
    const user = this.context.logout(this.state.username, this.state.password);
    if (user) {
      this.props.history.push("/login");
        }
    }



  componentDidMount() {
    const user = localStorage.getItem("currentUser");

    if (user) {
      this.context.currentUser = user;
    }

    if (this.context.currentUser) {
      this.props.history.push("/home");
    }
  }


  render() {
    return (
      <AuthContext.Consumer>
        {context => {
          if (context.currentUser) {
            return <span>Welcome, {context.currentUser.username}</span>;
          } else {
            return (
              <div>
                <div>
                  <input
                    className="Username/Email"
                    type="text"
                    value={this.state.username}
                    onChange={e => this.setState({ username: e.target.value })}
                  ></input>
                </div>
                <div>
                  <input
                    className="Password"
                    type="text"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  ></input>
                </div>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
                <NavLink to="/register">Register</NavLink>
              </div>
            );
          }
        }}
      </AuthContext.Consumer>
    );
  }
}

export default withRouter(Login);
