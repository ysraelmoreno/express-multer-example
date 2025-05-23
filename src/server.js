const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const multer = require("multer");
const upload = multer({
  dest: "tmp",
  preservePath: true,
  storage: multer.diskStorage({
    destination: "tmp",
    filename(request, file, callback) {
      const fileName = `${file.originalname}`;

      return callback(null, fileName);
    },
  }),
});

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/file", upload.single("avatar"), async (req, res) => {
  res.send({ ok: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
