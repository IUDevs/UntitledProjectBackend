import express, { Express, Request, Response, Application } from "express";
import getAll from "./routes/getAll";

const app: Application = express();
const port = process.env.PORT || 8000;

app.use("/api", getAll);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
