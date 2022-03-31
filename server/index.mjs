import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import router from "./routes.mjs";

// APP
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(router);

// MAIN SERVER
app.listen(port, '0.0.0.0')

