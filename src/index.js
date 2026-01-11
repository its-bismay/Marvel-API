import express from "express";
import { secrets } from "./config/env.js";


//Import different routes
import moveRoutes from "./routes/movieRoutes.js"

const app = express()

app.get("/", (_req,res) => {
    res
    .send("Server is up and running")
})

app.use("/api/movies", moveRoutes)

app.listen(secrets.PORT, () => {
    console.log(`server is running on port: ${secrets.PORT}`)
})