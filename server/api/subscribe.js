import express from "express";
import { connection } from "../setupDB.js";

export const subscribe = express.Router();

subscribe.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const selectQuery = `SELECT * FROM subscribers WHERE email = ?;`
    const selectRes = await connection.execute(selectQuery, [email])
    const subscribers = selectRes[0]

    if (subscribers.length > 0) {
      return res.status(200).json({
        status: "err-list",
        errors: [
          {
            input: "email",
            msg: "User with such email already subscribed.",
          },
        ],
      })
    }

    const insertQuery = `INSERT INTO subscribers (email) VALUES (?);`
    const insertRes = await connection.execute(insertQuery, [
      email,
    ])

    const insertResObject = insertRes[0]

    if (insertResObject.insertId > 0) {
      return res.status(200).json({
        status: "ok",
        msg: "User subscribed",
      })
    } else {
      return res.status(400).json({
        status: "err",
        msg: "User could not subscribe",
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: "err",
      msg: "POST: SUBSCRIBE API - server error.",
    })
  }
})

subscribe.use((req, res, next) => {
  return res.status(404).json({ msg: 'Unsupported "SUBSCRIBE" method' })
})
