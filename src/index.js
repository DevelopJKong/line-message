import "dotenv/config";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";

const app = express();
const logger = morgan("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use("/", globalRouter);


const PORT = process.env.PORT || 5050;

const handleListener = () => {
    console.log(`Hello! let's start http://localhost:${PORT}`);
};

app.listen(PORT, handleListener);