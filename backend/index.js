import dotenv from "dotenv";
dotenv.config();

import { app } from "./app.js";

import { connectToDB } from "./db/db.js";

connectToDB()
.then(() => {
  app.on("error", () => {
    console.log("Server Not responding")
  })
  app.listen(process.env.PORT, () => {
    console.log(`App running on port 3000`);
  });
})
.catch((error)=>{
  console.log(error)
  console.log("MongoDB not connected")
});