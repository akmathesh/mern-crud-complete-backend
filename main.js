import express from "express";

const app = express();

const PORT = 5001;

app.get("/", (req, res) => {
  res.json({ msg: "Hello Students!!" });
});

app.listen(PORT, () => {
  console.log(`This server is running at http://localhost:${PORT}`);
});
