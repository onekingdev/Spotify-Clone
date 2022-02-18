const express = require("express");
const axios = require("axios");
const cores = require("cors");
const bodyparser = require("body-parser");
const qs = require("qs");
const { client_id, client_secert } = require("./env.js");

const app = express();
app.use(cores());
app.use(bodyparser.json());
const auth_token = Buffer.from(
  `${client_id}:${client_secert}`,
  "utf-8"
).toString("base64");
app.post("/login", (req, res, next) => {
  const code = req.body.code;
  const data = qs.stringify({
    grant_type: "authorization_code",
    redirect_uri: "http://localhost:3000/",
    code,
  });
  axios
    .post("https://accounts.spotify.com/api/token", data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((data) => {
      res.json({
        access_token: data.data["access_token"],
        refresh_token: data.data["refresh_token"],
        expires_in: data.data["expires_in"],
      });
      res.sendStatus(200);
    })
    .catch((err) => {
      //res.sendStatus(400);
    });
});

app.listen(3001);
