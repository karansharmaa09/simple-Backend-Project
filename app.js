import dotenv from "dotenv";
dotenv.config();

import Express from "express";

const app = Express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/jobs", (req, res) => {
  res.send(
    "<button onclick=\"window.location.href='https://in.indeed.com'\">Go to Indeed</button>"
  );
});

app.get("/twitter", (req, res) => {
  res.send(
    `<button onclick="window.location.href=\'https://twitter.com/login\'">Twiter Login</button>`
  );
});

app.listen(port, () => {
  console.log(`App Running at http://localhost:${port}`);
});
