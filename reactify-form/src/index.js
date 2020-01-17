import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/HomePage";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

import { Route, BrowserRouter as Router } from "react-router-dom";

import AuthContext from "./AuthContext";

const initialAuthContextState = {
  // currentUser: {
  //   username: "jaredpotter",
  //   password: "supersecretpassword"
  // },
  currentUser: null,
  users: [
    {
      username: "Spencer Wright",
      password: "fortheloveofgodpleasework"
    }
  ],
  resetPassword(username, newPassword) {
    const exists = this.users.find(user => {
      if (user.username === username) {
        return true;
      }
    });

    if (exists) {
      exists.password = newPassword;
    } else {
      // user not found.
    }
  },
  login(username, password) {
    const exists = this.users.find(user => {
      if (user.username === username && user.password === password) {
        return true;
      }
    });

    if (exists) {
      this.currentUser = exists;
      localStorage.setItem('currentUser', this.currentUser.username);

      return this.currentUser;
    } else {
      // show an invalid username/password error
    }
  },
  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  },
  error: null
};

const routing = (
  <AuthContext.Provider value={initialAuthContextState}>
    <Router>
      <Route path="/" exact component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/logout" component={LoginPage} />
      <Route path="/forgotPassword" component={ForgotPasswordPage} />
    </Router>
  </AuthContext.Provider>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
