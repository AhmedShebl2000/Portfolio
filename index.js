import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/send-message", (req, res) => {
  const { name, email, message } = req.body;

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
