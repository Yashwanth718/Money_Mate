import express from "express";

const app = express()

import cors from "cors";
import cookieParser from "cookie-parser";
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);


app.options(
  "/api/v1/user/sigin",
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(express.json({limit:"50mb"}));

import router from "./routes/index.js";
app.use("/api/v1", router);

export {app}