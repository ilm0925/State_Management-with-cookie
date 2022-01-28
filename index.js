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
  res.send(views.main(null, 0));
});
app.get("/login", (req, res) => {
  res.send(views.login());
});

app.post("/login", async (req, res) => {
  const body = req.body;
  const auth = Auth(body.id, body.pwd);
  console.log(auth);
  if (auth == false) {
    res.send("<script>alert('다시 로그인 해주세요')</script>");
  } else {
    res.set({
      "Set-Cookie": [`ID=${body.id}`, `PWD=${body.pwd}`, `NAME=${auth}`],
    });
    res.send("로그인성공");
  }
});

app.listen(3000, () => {
  console.log(`open Sever ${3000}`);
});
