import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Router from "./route/route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || "8080";

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", Router);

const URL =
  "mongodb+srv://user:FjWNWoq4a6qIYE1R@crudapp.w72c6.mongodb.net/CRUDAPP?retryWrites=true&w=majority";

/* const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  
  Connection(username, password);
        */

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
