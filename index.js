import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import Views from "./view/html.js";
import { Auth } from "./data.js";

const app = express();
const views = new Views();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const cookie = req.cookies;

  console.log(cookie.NAME);
  if (cookie.NAME == null && cookie.ID == null && cookie.PWD == null) {
    res.send(views.main(null, 0));
  } else {
    res.send(views.main(cookie.NAME, 1));
  }
});
app.get("/login", (req, res) => {
  res.send(views.login());
});

app.post("/login", async (req, res) => {
  const body = req.body;
  const auth = Auth(body.id, body.pwd);
  console.log(auth);
  if (auth == false) {
    res.send("<script>alert('다시 로그인 해주세요');history.back();</script>");
  } else {
    res.set({
      "Set-Cookie": [`ID=${body.id}`, `PWD=${body.pwd}`, `NAME=${auth}`],
    });
    res.redirect("/");
  }
});
app.post("/logout", (req, res) => {
  res.clearCookie("ID");
  res.clearCookie("PWD");
  res.clearCookie("NAME");
  res.redirect("/");
});
app.listen(3000, () => {
  console.log(`open Sever ${3000}`);
});
