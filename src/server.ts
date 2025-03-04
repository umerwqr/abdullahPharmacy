import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodbConnection";
import baseRoute from "./router/index";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

baseRoute(app);
app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});

app.listen(5000, () => {
  console.log("Server is running on port 3000");
  connectDB();
});
