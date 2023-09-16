import express from "express";
import { register } from "./register.js";
import { login } from "./login.js";
import { logout } from "./logout.js";
import { fundriserTypes } from "./fundriser-types.js";
import { users } from "./users.js";
import { subscribe } from "./subscribe.js";

export const api = express.Router()

api.all("/", (req, res) => {
  return res.json({
    msg: "Incomplete URL",
  })
})

api.use("/register", register);
api.use("/login", login);
api.use("/logout", logout);
api.use("/fundriser-types", fundriserTypes);
api.use("/users", users);
api.use("/subscribe", subscribe);
