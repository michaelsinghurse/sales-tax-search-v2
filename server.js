"use strict";

const appRoot = require("app-root-path");
const config = require(`${appRoot}/lib/config.js`);
const express = require("express");
const { getRates } = require(`${appRoot}/lib/ratesApi`);
const { getLocation } = require(`${appRoot}/lib/locationApi`);
const path = require("path");

const app = express();

app.set("host", config.HOST);
app.set("port", config.PORT);

// Express serves static assets only in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client", "build")));
}

const extractInputs = req => ({
  street: req.query.street,
  city: req.query.city,
  state: req.query.state,
  zip: req.query.zip,
  country: req.query.country || "US",
  searchId: req.query.searchId,
});

app.get("/api/rates", (req, res) => {
  const inputs = extractInputs(req);

  Promise.allSettled([getRates(inputs), getLocation(inputs)])
    .then(results => {
      if (results.every(result => result.status === "fulfilled")) {
        res.json({
          rates: results[0].value,
          location: results[1].value,
          inputs,
        });
      } else {
        res.json({ inputs });
      }
    });
});

// catch-all: respond with index.html file
app.get("*", (req, res) => {
  res.sendFile(path.resolve("client", "build", "index.html"));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(500).end();
});

app.listen(app.get("port"), app.get("host"), () => {
  console.log(`App is listening on port ${app.get("port")} of ${app.get("host")}!`);
});

module.exports = app;


