import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./routes.mjs";
import swaggerUI from "swagger-ui-express";
import docs from "./docs/index.mjs"
//import dotenv from "./../.env";
import env from 'dotenv'
//dotenv.config()

// APP
const app = express();
env.config()
const port = process.env.PORT;

// MIDDLEWARES
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(router);

// MAIN SERVER
app.listen(port, '0.0.0.0')

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

