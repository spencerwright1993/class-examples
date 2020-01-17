const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const secretKey = fs.readFileSync("secret256.key");

const saltRounds = 10;
const app = express();

app.use(bodyParser.json());

const users = {};

app.post("/register", (req, res) => {
  const body = req.body;
  const username = body.username;
  const password = body.password;

  if (!username || !password) {
    res.status(400)("Username or Password Missing Yo");
    return;
  }

  if (users[username]) {
    res.status(400).send("User Already Exists");
    return;
  }

  bcrypt.hash(password, saltRounds, (error, hashedPassword) => {
    if (error) {
      res.status(500).send("Password Failed To Hash");
      return;
      //TODO handle the failed case;
    }
    users[username] = hashedPassword;

    jwt.sign({ username }, secretKey, (error, token) => {
      if (error) {
        res.status(500).send("Failed to Create Token");
        return;
        //TODO handle failed case;
      }

      res.send(token);
      return;
    });
  });
});

app.post("/login", (req, res) => {
  const body = req.body;
  const username = body.username;
  const password = body.password;

  if (!username || !password) {
    res.send("Username or Password Missing Yo");
    return;
  }

  if (!users[username]) {
    res.send("User Does Not Exist");
    return;
  }

  const hashedPassword = users[username];

  bcrypt.compare(password, hashedPassword, (error, isSame) => {
    if (error) {
      res.status(400).send("Password Incorrect");
      return;
    }

    if (isSame) {
      jwt.sign({ username }, secretKey, (error, token) => {
        if (error) {
          res.status(500).send("Failed to Create Token");
          return;
          //TODO handle failed case;
        }

        res.send(token);
        return;
      });
    } else {
      res.send("Login Failed");
    }
  });
});

app.get("/authenticatedData", (req, res) => {
  const authorization = req.headers.authorization;
  let token = "";

  if (authorization && authorization.split(" ")[0] === "Bearer") {
    token = authorization.split(" ")[1];
  }
  jwt.verify(token, secretKey, (error, decodedToken) => {
    if (error) {
      res.status(500).send("Token Not Valid");
      return;
      //TODO handle failed case
    }

    res.send("the private data");
  });
});

app.listen(3000, () => {
  console.log("Server Started Successfully");
});
