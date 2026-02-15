const appContent =
  `// HAPPY CODING :>
  
import express from "express"
import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()

import router from "./routes/routes.js"

const app = express()
const port = process.env.PORT || 3000

/*
Initially commented out to let server run. Please add a valid connection string before un-commenting this part for a better experience!

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
*/

app.use('/', router)

app.listen(port, () => {
  console.log("Server Started.")
})
`
  ;

export default appContent