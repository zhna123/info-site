// use express to serve file
/*
  localhost:8080 should take users to index.html
  localhost:8080/about should take users to about.html
  localhost:8080/contact-me should take users to contact-me.html
  404.html should display any time the user tries to go to a page not listed above.
*/

import express from "express";
import path from "path"

const app = express();
const port = 8080;
const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname }); 
}) 

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: __dirname })
})

app.get("/contact-me", (req, res) => {
  res.sendFile("contact-me.html", { root: __dirname })
})

app.get("/style.css", (req, res) => {
  res.sendFile("style.css", { root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

