import express from "express";
import { connection } from "../setupDB.js";

export const fundriserTypes = express.Router()

fundriserTypes.post("/", async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      status: "err",
      msg: "Fundriser type could not be created. Provide title value.",
    })
  }

  try {
    const selectQuery = `SELECT * FROM \`fundriser-types\` WHERE title = ?;`
    const selectRes = await connection.execute(selectQuery, [title])
    const fundriserTypes = selectRes[0]

    if (fundriserTypes.length > 0) {
      return res.status(200).json({
        status: "err-list",
        errors: [
          {
            input: "fundriserType",
            msg: "Such fundriser title already exists.",
          },
        ],
      })
    }

    const insertQuery = `INSERT INTO \`fundriser-types\` (title) VALUES (?)`
    const insertRes = await connection.execute(insertQuery, [title]);
    const insertResObject = insertRes[0]

    if (insertResObject.insertId > 0) {
      return res.status(200).json({
        status: "ok",
        msg: "Fundriser type created successfully.",
      });
    } else {
      return res.status(400).json({
        status: "err",
        msg: "Fundriser type could not bet created. Please try again later.",
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: "err",
      msg: "POST: CAR TYPES API - server error.",
    })
  }
});

fundriserTypes.get("/", async (req, res) => {

  try {
    const selectQuery = `SELECT title FROM \`fundriser-types\`;`;
    const selectRes = await connection.execute(selectQuery)
    const fundriserTypes = selectRes[0];

    return res.status(200).json({
      status: "ok",
      list: fundriserTypes,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: "err",
      msg: "GET: CAR TYPES API - server error.",
    })
  }
});

fundriserTypes.delete("/:title", async (req, res) => {
  const { title } = req.params;

  try {
    const deleteQuery = `DELETE FROM \`fundriser-types\` WHERE title = ?;`
    const deleteRes = await connection.execute(deleteQuery, [title])
    const fundriserTypes = deleteRes[0]

    if (fundriserTypes.affectedRows > 0) {
      return res.status(200).json({
        status: "ok",
        msg: "Fundriser type deleted.",
      })
    } else {
      return res.status(400).json({
        status: "err",
        msg: "There was nothing to delete.",
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: "err",
      msg: "DELETE: FUNDRISER TYPES API - server error.",
    })
  }
});

fundriserTypes.put("/:oldTitle", async (req, res) => {
  const { oldTitle } = req.params;
  const { newTitle } = req.body;

  if (!oldTitle || !newTitle) {
    return res.status(400).json({
      status: "err",
      msg: 'fundriser type could not be created. Provide "title" values.',
    })
  }

  try {
    const selectQuery = `SELECT * FROM \`fundriser-types\` WHERE title = ?;`
    const selectRes = await connection.execute(selectQuery, [newTitle])
    const fundriserTypes = selectRes[0]

    if (fundriserTypes.length > 0) {
      return res.status(200).json({
        status: "err-list",
        errors: [
          {
            input: "fundriserTypes",
            msg: "Such fundriser type already exists.",
          },
        ],
      })
    }

    const updateQuery = `UPDATE \`fundriser-types\` SET title = ? WHERE title = ?`
    const updateRes = await connection.execute(updateQuery, [
      newTitle,
      oldTitle,
    ])
    const updateResObject = updateRes[0]

    if (updateResObject.affectedRows > 0) {
      return res.status(200).json({
        status: "ok",
        msg: "Fundriser type updated.",
      })
    } else {
      return res.status(400).json({
        status: "err",
        msg: "Fundriser type could not be updated.",
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: "err",
      msg: "PUT: FUNDRISER TYPES API - server error.",
    })
  }
});


  fundriserTypes.use((req, res, next) => {
    return res.status(404).json({ msg: 'Unsupported "fundriser types" method' })
  });
